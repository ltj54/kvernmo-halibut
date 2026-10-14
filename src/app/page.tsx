import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Home() {
  return (
    <main>
      <div className="draft-note">Uforpliktende konseptutkast · innhold og bilder er ikke godkjent for endelig publisering</div>
      <header className="site-header wrap">
        <a className="brand" href="#top" aria-label="Kvernmo Halibut – til toppen">
          <span className="brand-mark" aria-hidden="true">KH</span>
          <span>KVERNMO <strong>HALIBUT</strong></span>
        </a>
        <nav aria-label="Hovedmeny">
          <a href="#opplevelsen">Opplevelsen</a>
          <a href="#baten">Båten</a>
          <a href="#turer">Turene</a>
        </nav>
        <a className="nav-cta" href="#kontakt">Planlegg en tur <span aria-hidden="true">↗</span></a>
      </header>

      <section className="hero wrap" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">SEILAS I VEST-FINNMARK</p>
          <h1 id="hero-title">Fjorden venter.<br /><em>Ta tiden tilbake.</em></h1>
          <p className="lead">Opplev kysten fra en Nauticat 525 – med Bjørne som lokalkjent skipper, eller med båten på egen hånd etter nærmere avtale.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#turer">Se mulighetene <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="#baten">Bli kjent med båten <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-facts" aria-label="Nøkkelfakta">
            <span>NAUTICAT 525</span><span>MOTORSEILER</span><span>9 KØYEPLASSER</span>
          </div>
        </div>
        <div className="hero-visual">
          <Image src={`${basePath}/fjord-placeholder.svg`} alt="Illustrasjon av en motorseiler i fjordlandskap; erstattes med fotografi fra Bjørne" fill priority sizes="(max-width: 900px) 100vw, 50vw" />
          <span className="image-label">Plass for foto fra Bjørne</span>
          <div className="visual-caption"><span>01 / 03</span><span>ET ANNET PERSPEKTIV PÅ KYSTEN</span></div>
        </div>
      </section>

      <section className="intro-section" id="opplevelsen" aria-labelledby="intro-title">
        <div className="wrap intro-grid">
          <p className="eyebrow">OPPLEVELSEN</p>
          <div>
            <h2 id="intro-title">Det du husker, skjer<br /><em>ofte underveis.</em></h2>
            <p>En tur på fjorden handler om mer enn å komme fram. Det handler om lyset, landskapet og roen om bord. I sesong kan hval, spekkhogger og nordlys være en del av opplevelsen når naturen og forholdene spiller på lag.</p>
            <p className="small-note">Naturmøter kan aldri garanteres. Ruter og turinnhold avtales før bestilling.</p>
          </div>
        </div>
      </section>

      <section className="boat-section wrap" id="baten" aria-labelledby="boat-title">
        <div className="section-top"><p className="eyebrow">BÅTEN</p><span className="section-number">01 — NAUTICAT 525</span></div>
        <div className="boat-grid">
          <div className="boat-panel" role="img" aria-label="Plass for autentisk fotografi av Nauticat 525">
            <span>Her bør et ekte bilde av båten få plass.</span>
          </div>
          <div className="boat-copy">
            <h2 id="boat-title">Et sted å lande.<br /><em>Et sted å dra.</em></h2>
            <p>Kvernmo Halibut tilbyr seilas med en Nauticat 525 motorseiler. Båten har ni køyeplasser og kan leies både med og uten mannskap, etter nærmere avtale.</p>
            <dl className="specs">
              <div><dt>TYPE</dt><dd>Motorseiler</dd></div>
              <div><dt>MODELL</dt><dd>Nauticat 525</dd></div>
              <div><dt>KØYEPLASSER</dt><dd>9</dd></div>
            </dl>
            <p className="small-note">Bilder, tekniske spesifikasjoner og praktiske vilkår fylles inn sammen med Bjørne.</p>
          </div>
        </div>
      </section>

      <section className="trip-section" id="turer" aria-labelledby="trip-title">
        <div className="wrap">
          <div className="section-top"><p className="eyebrow">TURMULIGHETER</p><span className="section-number">02 — FINN DIN SEILAS</span></div>
          <h2 id="trip-title">To måter å dra.<br /><em>Din opplevelse.</em></h2>
          <div className="trip-grid">
            <article className="trip-card"><span className="trip-index">01</span><h3>Med skipper</h3><p>Bjørne kjenner båten og områdene det er aktuelt å seile i. En tur med skipper gir plass til å være til stede mens landskapet åpner seg.</p><a href="#kontakt">Spør om en tur <span aria-hidden="true">↗</span></a></article>
            <article className="trip-card"><span className="trip-index">02</span><h3>Uten mannskap</h3><p>For deg som ønsker å leie båten på egen hånd. Forutsetninger, område og praktiske detaljer avklares direkte med Bjørne.</p><a href="#kontakt">Spør om leie <span aria-hidden="true">↗</span></a></article>
          </div>
          <p className="small-note trip-disclaimer">Varighet, avreisehavn, pris, krav til fører og øvrige leievilkår er ikke avklart i dette utkastet.</p>
        </div>
      </section>

      <section className="contact-section wrap" id="kontakt" aria-labelledby="contact-title">
        <p className="eyebrow">NESTE STEG</p>
        <h2 id="contact-title">Kanskje begynner turen<br /><em>med en samtale.</em></h2>
        <p>Fortell når du ønsker å reise og om du ser for deg tur med skipper eller leie av båten alene. Da kan Bjørne svare på muligheter, vilkår og pris.</p>
        <div className="contact-placeholder">Kontaktinformasjon og eventuell forespørselsløsning avtales før siden tas i bruk.</div>
      </section>
      <footer className="site-footer"><div className="wrap"><span>KVERNMO HALIBUT</span><span>Konseptutkast · ikke offisiell kundeside</span><a href="#top">Til toppen ↑</a></div></footer>
    </main>
  );
}
