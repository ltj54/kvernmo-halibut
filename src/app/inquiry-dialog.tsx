"use client";

import { useRef, useState, type SubmitEvent } from "react";

type Language = "nb" | "en";

const copy = {
  nb: {
    trigger: "Spør om en tur",
    dialogLabel: "Forespørsel om Joelma",
    closeLabel: "Lukk dialog",
    thanks: (name: string) => `Takk, ${name || "da"}!`,
    confirmationTitle: "Slik kan bekreftelsen se ut.",
    confirmationBody: "Dette er bare en forhåndsvisning. Forespørselen er ikke sendt til noen.",
    close: "Lukk",
    formTitle: "Fortell litt om turen",
    intro: "Fyll inn det du vet, så er det lettere for Bjørne å svare.",
    name: "Navn",
    email: "E-post",
    phone: "Telefon",
    optional: "(valgfritt)",
    date: "Ønsket dato",
    guests: "Antall personer",
    tripQuestion: "Hva slags tur ser du for deg?",
    chooseTrip: "Velg hvis du vet",
    skipperTrip: "Tur med Bjørne som skipper",
    rental: "Leie uten mannskap",
    unsure: "Usikker ennå",
    message: "Melding",
    placeholder: "Skriv gjerne litt om hva du lurer på …",
    demoNote: "Demonstrasjon · ingenting blir sendt",
    preview: "Se bekreftelsen",
  },
  en: {
    trigger: "Ask about a trip",
    dialogLabel: "Enquiry about Joelma",
    closeLabel: "Close dialog",
    thanks: (name: string) => `Thank you, ${name || "there"}!`,
    confirmationTitle: "This is how a confirmation could look.",
    confirmationBody: "This is a preview only. Your enquiry has not been sent.",
    close: "Close",
    formTitle: "Tell us a little about your trip",
    intro: "Share what you know so Bjørne can give you a useful reply.",
    name: "Name",
    email: "Email",
    phone: "Phone",
    optional: "(optional)",
    date: "Preferred date",
    guests: "Number of guests",
    tripQuestion: "What kind of trip are you considering?",
    chooseTrip: "Choose if you know",
    skipperTrip: "Trip with Bjørne as skipper",
    rental: "Rental without crew",
    unsure: "Not sure yet",
    message: "Message",
    placeholder: "Tell us what you would like to know …",
    demoNote: "Preview only · nothing will be sent",
    preview: "Preview confirmation",
  },
} satisfies Record<Language, Record<string, string | ((name: string) => string)>>;

export default function InquiryDialog({ language = "nb" }: Readonly<{ language?: Language }>) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [senderName, setSenderName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const text = copy[language];

  function openDialog() {
    setSubmitted(false);
    dialogRef.current?.showModal();
  }

  function closeDialog() {
    dialogRef.current?.close();
  }

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const nameEntry = formData.get("name");
    setSenderName(typeof nameEntry === "string" ? nameEntry : "");
    setSubmitted(true);
  }

  return (
    <>
      <button className="button button-light inquiry-trigger" type="button" onClick={openDialog}>
        {text.trigger} <span aria-hidden="true">→</span>
      </button>
      <dialog className="inquiry-dialog" ref={dialogRef} aria-labelledby="inquiry-title">
        <div className="dialog-topline">
          <span>{text.dialogLabel}</span>
          <button className="dialog-close" type="button" onClick={closeDialog} aria-label={text.closeLabel}>
            ×
          </button>
        </div>

        {submitted ? (
          <div className="dialog-confirmation">
            <output className="section-label" aria-live="polite">{(text.thanks as (name: string) => string)(senderName)}</output>
            <h2 id="inquiry-title">{text.confirmationTitle}</h2>
            <p>{text.confirmationBody}</p>
            <button className="button button-dark" type="button" onClick={closeDialog}>{text.close}</button>
          </div>
        ) : (
          <>
            <h2 id="inquiry-title">{text.formTitle}</h2>
            <p className="dialog-intro">{text.intro}</p>
            <form className="inquiry-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <label>{text.name}<input name="name" autoComplete="name" required /></label>
                <label>{text.email}<input name="email" type="email" autoComplete="email" required /></label>
              </div>
              <div className="form-row form-row-three">
                <label><span className="form-label">{text.phone} <small>{text.optional}</small></span><input name="phone" type="tel" autoComplete="tel" /></label>
                <label>{text.date}<input name="date" type="date" /></label>
                <label>{text.guests}<input name="people" type="number" min="1" max="9" inputMode="numeric" /></label>
              </div>
              <label><span className="form-label">{text.tripQuestion}</span>
                <select name="trip" defaultValue="">
                  <option value="">{text.chooseTrip}</option>
                  <option value="skipper">{text.skipperTrip}</option>
                  <option value="rental">{text.rental}</option>
                  <option value="unsure">{text.unsure}</option>
                </select>
              </label>
              <label>{text.message}<textarea name="message" rows={4} placeholder={text.placeholder} required /></label>
              <div className="dialog-actions">
                <span>{text.demoNote}</span>
                <button className="button button-dark" type="submit">{text.preview} <span aria-hidden="true">→</span></button>
              </div>
            </form>
          </>
        )}
      </dialog>
    </>
  );
}
