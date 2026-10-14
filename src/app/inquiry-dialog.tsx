"use client";

import { useRef, useState, type SubmitEvent } from "react";

export default function InquiryDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [senderName, setSenderName] = useState("");
  const [submitted, setSubmitted] = useState(false);

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
        Spør om en tur <span aria-hidden="true">→</span>
      </button>
      <dialog
        className="inquiry-dialog"
        ref={dialogRef}
        aria-labelledby="inquiry-title"
      >
        <div className="dialog-topline">
          <span>Forespørsel om Joelma</span>
          <button className="dialog-close" type="button" onClick={closeDialog} aria-label="Lukk dialog">
            ×
          </button>
        </div>

        {submitted ? (
          <div className="dialog-confirmation">
            <output className="section-label" aria-live="polite">Takk, {senderName || "da"}!</output>
            <h2 id="inquiry-title">Slik kan bekreftelsen se ut.</h2>
            <p>Dette er bare en forhåndsvisning. Forespørselen er ikke sendt til noen.</p>
            <button className="button button-dark" type="button" onClick={closeDialog}>Lukk</button>
          </div>
        ) : (
          <>
            <h2 id="inquiry-title">Fortell litt om turen</h2>
            <p className="dialog-intro">Fyll inn det du vet, så er det lettere for Bjørne å svare.</p>
            <form className="inquiry-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <label>Navn<input name="name" autoComplete="name" required /></label>
                <label>E-post<input name="email" type="email" autoComplete="email" required /></label>
              </div>
              <div className="form-row form-row-three">
                <label><span className="form-label">Telefon <small>(valgfritt)</small></span><input name="phone" type="tel" autoComplete="tel" /></label>
                <label>Ønsket dato<input name="date" type="date" /></label>
                <label>Antall personer<input name="people" type="number" min="1" max="9" inputMode="numeric" /></label>
              </div>
              <label><span className="form-label">Hva slags tur ser du for deg?</span>
                <select name="trip" defaultValue="">
                  <option value="">Velg hvis du vet</option>
                  <option value="skipper">Tur med Bjørne som skipper</option>
                  <option value="rental">Leie uten mannskap</option>
                  <option value="unsure">Usikker ennå</option>
                </select>
              </label>
              <label>Melding<textarea name="message" rows={4} placeholder="Skriv gjerne litt om hva du lurer på …" required /></label>
              <div className="dialog-actions">
                <span>Demonstrasjon · ingenting blir sendt</span>
                <button className="button button-dark" type="submit">Se bekreftelsen <span aria-hidden="true">→</span></button>
              </div>
            </form>
          </>
        )}
      </dialog>
    </>
  );
}
