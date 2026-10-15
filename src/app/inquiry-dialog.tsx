"use client";

import { useRef, useState, type SubmitEvent } from "react";
import { contactDetails, inquiryEndpoint } from "./business-details";
import { submitInquiry } from "./inquiry-submit";

const copy = {
  nb: {
    trigger: "Skriv en forespørsel",
    title: "Forespørsel om Joelma",
    intro: "Fortell når dere vil dra og hva slags tur dere ønsker.",
    close: "Lukk dialog",
    name: "Navn",
    email: "E-post",
    phone: "Telefon (valgfritt)",
    date: "Ønsket dato",
    guests: "Antall gjester",
    trip: "Turtype",
    choose: "Velg hvis du vet",
    skipper: "Tur med Bjørne som skipper",
    rental: "Leie uten mannskap",
    unsure: "Ikke bestemt ennå",
    message: "Melding",
    placeholder: "Ønsket varighet, spørsmål eller andre ønsker …",
    note: "Henvendelsen formidles til Bjørne via FormSubmit.",
    submit: "Send forespørsel",
    sending: "Sender …",
    sentTitle: "Takk for forespørselen",
    sentBody: "Forespørselen er registrert for videresending til Bjørne. Han svarer på e-post.",
    error: "Vi fikk ikke bekreftet innsendingen. Opplysningene er beholdt. Prøv igjen, eller kontakt Bjørne direkte.",
    activation: "Skjemaet venter på aktivering. Kontakt Bjørne direkte på e-post eller telefon inntil videre.",
    privacyTitle: "Om opplysningene du sender",
    privacyBody: "Navn, kontaktopplysninger og turønsker brukes av Kvernmo Halibut for å besvare henvendelsen. FormSubmit lagrer en kopi av innsendingen i 30 dager.",
    privacyLink: "FormSubmits personvernerklæring",
    directContact: "Send e-post direkte til Bjørne",
    done: "Lukk",
    subject: "Forespørsel om tur med Joelma",
    notSpecified: "Ikke oppgitt",
  },
  en: {
    trigger: "Write an enquiry",
    title: "Enquiry about Joelma",
    intro: "Tell Bjørne when you would like to travel and what kind of trip you have in mind.",
    close: "Close dialog",
    name: "Name",
    email: "Email",
    phone: "Phone (optional)",
    date: "Preferred date",
    guests: "Number of guests",
    trip: "Trip type",
    choose: "Choose if you know",
    skipper: "Trip with Bjørne as skipper",
    rental: "Rental without crew",
    unsure: "Not decided yet",
    message: "Message",
    placeholder: "Preferred trip length, questions or other wishes …",
    note: "Your enquiry is forwarded to Bjørne via FormSubmit.",
    submit: "Send enquiry",
    sending: "Sending …",
    sentTitle: "Thank you for your enquiry",
    sentBody: "Your enquiry has been accepted for forwarding to Bjørne. He will reply by email.",
    error: "We could not confirm your submission. Your details have been kept. Try again or contact Bjørne directly.",
    activation: "The form is awaiting activation. Please contact Bjørne directly by email or phone for now.",
    privacyTitle: "About the information you send",
    privacyBody: "Kvernmo Halibut uses your name, contact details and trip preferences to answer your enquiry. FormSubmit stores a copy of the submission for 30 days.",
    privacyLink: "FormSubmit privacy policy",
    directContact: "Email Bjørne directly",
    done: "Close",
    subject: "Enquiry about a trip aboard Joelma",
    notSpecified: "Not specified",
  },
};

function readField(data: FormData, key: string): string {
  const value = data.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export default function InquiryDialog({ language = "nb" }: Readonly<{ language?: "nb" | "en" }>) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inFlight = useRef(false);
  const [status, setStatus] = useState<"idle" | "sending" | "accepted" | "error" | "activation-required">("idle");
  const text = copy[language];
  const isSending = status === "sending";

  function openDialog() {
    if (status === "accepted") setStatus("idle");
    dialogRef.current?.showModal();
  }

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    if (inFlight.current) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    if (readField(data, "_honey")) {
      setStatus("error");
      return;
    }
    const tripLabels = new Map([["skipper", text.skipper], ["rental", text.rental], ["unsure", text.unsure]]);
    const payload = {
      name: readField(data, "name"),
      email: readField(data, "email"),
      phone: readField(data, "phone"),
      date: readField(data, "date"),
      guests: readField(data, "guests"),
      trip: tripLabels.get(readField(data, "trip")) || text.notSpecified,
      message: readField(data, "message"),
      language,
      _replyto: readField(data, "email"),
      _subject: text.subject,
      _template: "table",
      _url: `${window.location.origin}${window.location.pathname}`,
      _honey: "",
    };
    inFlight.current = true;
    setStatus("sending");
    try {
      const result = await submitInquiry(inquiryEndpoint, payload);
      setStatus(result);
      if (result === "accepted") form.reset();
    } catch {
      setStatus("error");
    } finally {
      inFlight.current = false;
    }
  }

  return (
    <>
      <button className="button button-light inquiry-trigger" type="button" onClick={openDialog}>
        {text.trigger} <span aria-hidden="true">→</span>
      </button>
      <dialog className="inquiry-dialog" ref={dialogRef} aria-labelledby="inquiry-title">
        <div className="dialog-topline">
          <span>{contactDetails.email}</span>
          <button className="dialog-close" type="button" onClick={() => dialogRef.current?.close()} aria-label={text.close}>×</button>
        </div>
        <h2 id="inquiry-title">{status === "accepted" ? text.sentTitle : text.title}</h2>
        {status === "accepted" ? (
          <div className="inquiry-success">
            <output aria-live="polite">{text.sentBody}</output>
            <button className="button button-dark" type="button" onClick={() => dialogRef.current?.close()}>{text.done}</button>
          </div>
        ) : (
        <>
        <p className="dialog-intro">{text.intro}</p>
        <form className="inquiry-form" onSubmit={handleSubmit} aria-busy={isSending}>
          <input type="text" name="_honey" tabIndex={-1} autoComplete="off" hidden aria-label="Leave empty" />
          <fieldset className="inquiry-fields" disabled={isSending}>
          <div className="form-row">
            <label>{text.name}<input name="name" autoComplete="name" maxLength={120} required /></label>
            <label>{text.email}<input name="email" type="email" autoComplete="email" maxLength={254} required /></label>
          </div>
          <div className="form-row">
            <label>{text.date}<input name="date" type="date" /></label>
            <label>{text.guests}<input name="guests" type="number" min="1" inputMode="numeric" /></label>
          </div>
          <div className="form-row">
            <label>{text.phone}<input name="phone" type="tel" autoComplete="tel" maxLength={40} /></label>
            <label><span>{text.trip}</span>
              <select name="trip" defaultValue="">
                <option value="">{text.choose}</option>
                <option value="skipper">{text.skipper}</option>
                <option value="rental">{text.rental}</option>
                <option value="unsure">{text.unsure}</option>
              </select>
            </label>
          </div>
          <label>{text.message}<textarea name="message" rows={4} placeholder={text.placeholder} maxLength={5000} required /></label>
          </fieldset>
          <details className="inquiry-privacy">
            <summary>{text.privacyTitle}</summary>
            <p>{text.privacyBody}</p>
            <a href="https://formsubmit.co/privacy.pdf" target="_blank" rel="noreferrer">{text.privacyLink} ↗</a>
          </details>
          <div className="dialog-actions">
            <p>{text.note}</p>
            <button className="button button-dark" type="submit" disabled={isSending}>{isSending ? text.sending : text.submit} <span aria-hidden="true">→</span></button>
          </div>
          <output className="inquiry-status" aria-live="polite">
            {status === "error" && text.error}
            {status === "activation-required" && text.activation}
          </output>
          {(status === "error" || status === "activation-required") && (
            <a className="inquiry-fallback" href={`mailto:${contactDetails.email}`}>{text.directContact}: {contactDetails.email}</a>
          )}
        </form>
        </>
        )}
      </dialog>
    </>
  );
}
