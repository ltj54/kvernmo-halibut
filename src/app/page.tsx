import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Home() {
  return (
    <main id="top">
      <div className="draft-note">Et uforpliktende forslag til nettside for Kvernmo Halibut</div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Kvernmo Halibut, til toppen">
          <span>Kvernmo Halibut<small>Turer på Altafjorden</small></span>
        </a>
        <nav aria-label="Hovedmeny">
          <a href="#joelma">Båten</a>
          <a href="#fjorden">Fjorden</a>
          <a href="#turer">Turer og leie</a>
        </nav>
        <a className="header-button" href="#turer">Se mulighetene <span aria-hidden="true">↓</span></a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="location-label"><span aria-hidden="true">●</span> Vest-Finnmark</p>
          <h1 id="hero-title">Har du lyst på en tur på fjorden?</h1>
          <p>Bjørne leier ut Joelma, en Nauticat 525 med ni køyeplasser. Bli med ham som skipper, eller lei båten uten mannskap etter avtale.</p>
          <div className="hero-links">
            <a className="button button-dark" href="#joelma">Møt Joelma</a>
            <a className="plain-link" href="#turer">Se turmulighetene <span aria-hidden="true">→</span></a>
          </div>
          <p className="hero-aside">Hval, spekkhogger og nordlys kan dukke opp. Det er naturen som bestemmer.</p>
        </div>
        <figure className="hero-photo">
          <Image src={`${basePath}/images/joelma-seilas.webp`} alt="Utsikten fra dekket på Joelma under seilas" fill priority sizes="(max-width: 760px) 100vw, 58vw" />
          <figcaption>Ute på sjøen med Joelma</figcaption>
        </figure>
      </section>

      <section className="boat-section" id="joelma" aria-labelledby="boat-title">
        <div className="section-inner boat-layout">
          <figure className="boat-photo">
            <Image src={`${basePath}/images/joelma-korsfjord.webp`} alt="Joelma i Korsfjord" fill sizes="(max-width: 760px) 100vw, 52vw" />
            <figcaption>Joelma i Korsfjord</figcaption>
          </figure>
          <div className="boat-copy">
            <p className="section-label">Båten</p>
            <h2 id="boat-title">Dette er Joelma</h2>
            <p>Joelma er en Nauticat 525 motorseiler. Det er god plass om bord, enten du vil på tur med Bjørne eller ønsker å leie båten på egen hånd. Bjørne kjenner både båten og fjordene her nord.</p>
            <dl className="boat-details">
              <div><dt>Båttype</dt><dd>Motorseiler</dd></div>
              <div><dt>Modell</dt><dd>Nauticat 525</dd></div>
              <div><dt>Køyeplasser</dt><dd>9</dd></div>
              <div><dt>Leie</dt><dd>Med eller uten skipper</dd></div>
            </dl>
            <div className="price-box">
              <span>Veiledende døgnpris</span>
              <strong>I underkant av 10&nbsp;000 kr</strong>
              <small>Prisen avhenger blant annet av hvor mange dere er. Endelig pris avtales med Bjørne.</small>
            </div>
          </div>
        </div>
      </section>

      <section className="fjord-section" id="fjorden" aria-labelledby="fjord-title">
        <div className="section-inner fjord-layout">
          <div className="fjord-copy">
            <p className="section-label">Rundt Altafjorden og Årøya</p>
            <h2 id="fjord-title">Bjørne kjenner fjordene</h2>
            <p>Langfjord, Stjernsund, Rognsund og Vargsund – dette er noen av farvannene Bjørne kjenner. Her finnes det sild, og i sesong kan man også være heldig å se hval eller spekkhogger.</p>
            <p className="plain-note">Hvor turen går, kommer an på vær, forhold og hva dere har lyst til. Dyreliv kan ikke loves.</p>
          </div>
          <figure className="chart-photo">
            <Image src={`${basePath}/images/altafjord-kart.webp`} alt="Sjøkart over Altafjorden og sundene rundt Årøya" fill sizes="(max-width: 760px) 100vw, 55vw" />
            <figcaption>Kart over Altafjorden, sendt av Bjørne</figcaption>
          </figure>
          <div className="straits" aria-label="Sund i området">
            <span>Langfjord</span><span>Stjernsund</span><span>Rognsund</span><span>Vargsund</span>
          </div>
        </div>
      </section>

      <section className="inside-section" id="ombord" aria-labelledby="inside-title">
        <div className="section-inner">
          <div className="inside-heading">
            <div><p className="section-label">Litt om livet om bord</p><h2 id="inside-title">Kom inn og se deg rundt</h2></div>
            <p>Her er byssa, oppholdsrommet og styreposisjonen under hardtoppen.</p>
          </div>
          <div className="inside-gallery">
            <figure className="inside-room">
              <Image src={`${basePath}/images/joelma-oppholdsrom.webp`} alt="Oppholdsrommet om bord på Joelma" fill sizes="(max-width: 760px) 100vw, 46vw" />
              <figcaption>Oppholdsrom</figcaption>
            </figure>
            <figure>
              <Image src={`${basePath}/images/joelma-bysse.webp`} alt="Byssa om bord på Joelma" fill sizes="(max-width: 760px) 100vw, 27vw" />
              <figcaption>Bysse</figcaption>
            </figure>
            <figure>
              <Image src={`${basePath}/images/joelma-hardtop.webp`} alt="Styreplassen under hardtoppen på Joelma" fill sizes="(max-width: 760px) 100vw, 27vw" />
              <figcaption>Styreplass under hardtop</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="trips-section" id="turer" aria-labelledby="trips-title">
        <div className="section-inner">
          <p className="section-label">To måter å dra på</p>
          <h2 id="trips-title">Hva passer for dere?</h2>
          <div className="trip-options">
            <article>
              <span className="option-mark" aria-hidden="true">☺</span>
              <div><h3>Tur med Bjørne som skipper</h3><p>Bjørne tar roret og viser dere farvannet. Sammen finner dere ut hvor turen skal gå, ut fra vær og ønsker.</p></div>
            </article>
            <article>
              <span className="option-mark" aria-hidden="true">⌁</span>
              <div><h3>Lei Joelma uten mannskap</h3><p>Vil dere dra på egen hånd? Ta en prat med Bjørne om erfaring, seilingsområde og hva som følger med leien.</p></div>
            </article>
          </div>
          <p className="trip-note">Varighet, avreisehavn og andre praktiske ting avtales før turen.</p>
          <a className="button button-light" href="#kontakt">Spør om en tur <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <footer className="contact" id="kontakt">
        <div className="section-inner contact-layout">
          <div><p className="section-label">Kvernmo Halibut · Vest-Finnmark</p><h2>Turen starter med en prat.</h2></div>
          <p>Fortell gjerne når dere vil dra, hvor mange dere er, og om dere ønsker skipper. Kontaktinformasjon settes inn når dette er avklart med Bjørne.</p>
          <div className="footer-bottom"><span>Uforpliktende konseptutkast</span><a href="#top">Til toppen ↑</a></div>
        </div>
      </footer>
    </main>
  );
}
