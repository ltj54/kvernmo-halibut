"use client";

import { useRef } from "react";

export default function BoatInfo({ language = "nb" }: Readonly<{ language?: "nb" | "en" }>) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const isEnglish = language === "en";
  const specs = isEnglish
    ? [["Length", "15.90 m without bowsprit · 16.65 m with"], ["Beam", "4.60 m"], ["Draft", "2.20 m"], ["Displacement", "Approx. 24 tonnes"], ["Standard engine", "Perkins M150 TI · 150 hp"], ["Rig", "Ketch · main and mizzen masts"]]
    : [["Lengde", "15,90 m uten baugspryd · 16,65 m med"], ["Bredde", "4,60 m"], ["Dypgående", "2,20 m"], ["Deplasement", "Ca. 24 tonn"], ["Standardmotor", "Perkins M150 TI · 150 hk"], ["Rigg", "Ketch · stormast og mesanmast"]];

  return (
    <>
      <button
        className="boat-info-button"
        type="button"
        aria-label={isEnglish ? "Technical details about the Nauticat 525" : "Mer teknisk informasjon om Nauticat 525"}
        onClick={() => dialogRef.current?.showModal()}
      >
        i
      </button>
      <dialog
        className="boat-info-dialog"
        ref={dialogRef}
        aria-labelledby="boat-info-title"
      >
        <div className="dialog-topline">
          <span>{isEnglish ? "For the boat-minded" : "Litt for båtinteresserte"}</span>
          <button className="dialog-close" type="button" onClick={() => dialogRef.current?.close()} aria-label={isEnglish ? "Close dialog" : "Lukk dialog"}>
            ×
          </button>
        </div>
        <h2 id="boat-info-title">Nauticat 525</h2>
        <p className="boat-info-intro">{isEnglish ? "A substantial motor sailer with a wheelhouse and ketch rig. These are the model's standard specifications from Nauticat's brochure:" : "En stor motorseiler med styrehus og ketchrigg. Dette er modellens standarddata fra Nauticats brosjyre:"}</p>
        <dl className="boat-info-specs">
          {specs.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
        </dl>
        <p className="boat-info-note">{isEnglish ? "Joelma may have different equipment or specifications. Bjørne can confirm what applies to this particular boat." : "Joelma kan ha et annet utstyr eller oppsett. Bjørne kan fortelle hva som gjelder akkurat denne båten."}</p>
        <a className="boat-info-source" href="https://www.nauticatassociation.com/wp-content/uploads/2018/10/525ENG_102010.pdf" target="_blank" rel="noreferrer">
          {isEnglish ? "Nauticat 525 · standard brochure (PDF, 2010) ↗" : "Nauticat 525 · standardbrosjyre (PDF, 2010) ↗"}
        </a>
      </dialog>
    </>
  );
}
