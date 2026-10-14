"use client";

import { useRef } from "react";

export default function BoatInfo() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        className="boat-info-button"
        type="button"
        aria-label="Mer teknisk informasjon om Nauticat 525"
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
          <span>Litt for båtinteresserte</span>
          <button className="dialog-close" type="button" onClick={() => dialogRef.current?.close()} aria-label="Lukk dialog">
            ×
          </button>
        </div>
        <h2 id="boat-info-title">Nauticat 525</h2>
        <p className="boat-info-intro">En stor motorseiler med styrehus og ketchrigg. Dette er modellens standarddata fra Nauticats brosjyre:</p>
        <dl className="boat-info-specs">
          <div><dt>Lengde</dt><dd>15,90 m uten baugspryd · 16,65 m med</dd></div>
          <div><dt>Bredde</dt><dd>4,60 m</dd></div>
          <div><dt>Dypgående</dt><dd>2,20 m</dd></div>
          <div><dt>Deplasement</dt><dd>Ca. 24 tonn</dd></div>
          <div><dt>Standardmotor</dt><dd>Perkins M150 TI · 150 hk</dd></div>
          <div><dt>Rigg</dt><dd>Ketch · stormast og mesanmast</dd></div>
        </dl>
        <p className="boat-info-note">Joelma kan ha et annet utstyr eller oppsett. Bjørne kan fortelle hva som gjelder akkurat denne båten.</p>
        <a className="boat-info-source" href="https://www.nauticatassociation.com/wp-content/uploads/2018/10/525ENG_102010.pdf" target="_blank" rel="noreferrer">
          Nauticat 525 · standardbrosjyre (PDF, 2010) ↗
        </a>
      </dialog>
    </>
  );
}
