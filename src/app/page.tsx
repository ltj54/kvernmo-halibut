import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Home() {
  return (
    <main>
      <div className="draft-note"><span>Konseptutkast</span><span>Uforpliktende · ikke godkjent for publisering</span></div>

      <header className="masthead wrap" id="top">
        <a className="wordmark" href="#top" aria-label="Kvernmo Halibut, til toppen">
          <span>Kvernmo<br />Halibut</span><i aria-hidden="true">KH</i>
        </a>
        <p className="masthead-place">Seilas i Vest-Finnmark<br /><span>70° nord · Finnmark</span></p>
        <nav aria-label="Hovedmeny">
          <a href="#joelma">Joelma</a>
          <a href="#ombord">Om bord</a>
          <a href="#seilas">Seilas</a>
        </nav>
        <a className="masthead-contact" href="#kontakt">Ta kontakt <span aria-hidden="true">↗</span></a>
      </header>

      <section className="cover wrap" aria-labelledby="cover-title">
        <div className="cover-copy">
          <p className="overline"><span className="overline-dot" /> LANGS FJORDENE I VEST-FINNMARK</p>
          <h1 id="cover-title">Fjorden<br />er veien.</h1>
          <p className="cover-intro">Bli med Bjørne ut på sjøen, eller lei Joelma for din egen ferd. En Nauticat 525 med ni køyeplasser – hjemme i farvannet her nord.</p>
          <a className="quiet-link" href="#joelma">Møt båten <span aria-hidden="true">↓</span></a>
          <span className="cover-index">VEST-FINNMARK<br />NORD-NORGE</span>
        </div>
        <figure className="cover-photo">
          <Image src={`${basePath}/images/joelma-seilas.webp`} alt="Utsikt forover fra dekket på Joelma mens båten er underveis" fill priority sizes="(max-width: 760px) 100vw, 62vw" />
          <figcaption><span>01</span> Ombord på Joelma</figcaption>
        </figure>
      </section>

      <section className="field-note" aria-labelledby="field-note-title">
        <div className="wrap field-note-inner">
          <p className="margin-note">EN TUR<br />I EGET TEMPO</p>
          <div className="field-note-copy">
            <p className="overline">KYSTEN SETT FRA SJØEN</p>
            <h2 id="field-note-title">Noen steder<br />må oppleves <em>underveis.</em></h2>
            <p>Fjordene skifter med lyset og været. Her kan en dag by på bratte fjellsider, stille ankringsplasser – og, når sesongen og naturen vil det, hval, spekkhogger eller nordlys.</p>
            <p className="caution">Dyreliv og nordlys er naturfenomener og kan ikke loves på en bestemt tur.</p>
          </div>
          <div className="field-note-rule" aria-hidden="true">—</div>
        </div>
      </section>

      <section className="chart-note wrap" aria-labelledby="chart-title">
        <div className="section-marker"><span>LOKALT</span><span>ALTAFJORDEN</span></div>
        <div className="chart-copy">
          <p className="overline">ET FARVANN MED MANGE INNSEILINGER</p>
          <h2 id="chart-title">Mellom sundene.</h2>
          <p>Langfjord, Stjernsund, Rognsund og Vargsund. Bjørne kjenner Altafjorden og områdene rundt Årøya. Her snakker han også om sild, hval og spekkhogger – møter med naturen som følger sesong og forhold.</p>
          <p className="chart-disclaimer">Kartet viser farvannet, ikke en fast turplan. Seilas avtales etter vær og ønsker.</p>
        </div>
        <figure className="chart-photo">
          <Image src={`${basePath}/images/altafjord-kart.webp`} alt="Elektronisk sjøkart over Altafjorden og sundene rundt Årøya" fill sizes="(max-width: 760px) 100vw, 60vw" />
          <figcaption>Kart over Altafjorden og Årøya, sendt av Bjørne</figcaption>
        </figure>
        <div className="chart-names" aria-label="Sund i området">
          <span>Langfjord</span><span>Stjernsund</span><span>Rognsund</span><span>Vargsund</span>
        </div>
      </section>

      <section className="boat-story wrap" id="joelma" aria-labelledby="boat-title">
        <div className="section-marker"><span>01</span><span>FARTØYET</span></div>
        <div className="boat-story-main">
          <div className="boat-story-heading">
            <p className="overline">MØT JOELMA</p>
            <h2 id="boat-title">Bygd for<br />livet om bord.</h2>
            <p>Joelma er en Nauticat 525 motorseiler. Bjørne kjenner båten og fjordene hun seiler i. Turen kan gå med ham som skipper, eller med båten leid uten mannskap etter avtale.</p>
          </div>
          <figure className="boat-portrait">
            <Image src={`${basePath}/images/joelma-korsfjord.webp`} alt="Joelma i Korsfjord, med høstfargede fjellsider i bakgrunnen" fill sizes="(max-width: 760px) 100vw, 58vw" />
            <figcaption>Korsfjord <span>·</span> Joelma</figcaption>
          </figure>
          <div className="boat-facts" aria-label="Fakta om Joelma">
            <p><span>TYPE</span><strong>Motorseiler</strong></p>
            <p><span>MODELL</span><strong>Nauticat 525</strong></p>
            <p><span>KØYEPLASSER</span><strong>9</strong></p>
            <p><span>LEIE</span><strong>Med eller uten skipper</strong></p>
          </div>
          <p className="price-note"><span>PRISPEKER · PER DØGN</span><strong>I underkant av 10 000 kr</strong><small>Veiledende. Avhenger blant annet av antall personer og hva som avtales.</small></p>
        </div>
      </section>

      <section className="inside" id="ombord" aria-labelledby="inside-title">
        <div className="wrap">
          <div className="section-marker"><span>02</span><span>UNDER DEKK</span></div>
          <div className="inside-heading">
            <h2 id="inside-title">Det er plass<br />til å bli.</h2>
            <p>Når dagen på sjøen er over, er det godt å komme inn. Her er noen glimt fra Joelma.</p>
          </div>
          <div className="inside-gallery">
            <figure className="inside-room">
              <Image src={`${basePath}/images/joelma-oppholdsrom.webp`} alt="Oppholdsrommet om bord på Joelma" fill sizes="(max-width: 760px) 100vw, 50vw" />
              <figcaption><span>01</span> Oppholdsrom</figcaption>
            </figure>
            <figure className="inside-galley">
              <Image src={`${basePath}/images/joelma-bysse.webp`} alt="Byssa om bord på Joelma" fill sizes="(max-width: 760px) 100vw, 25vw" />
              <figcaption><span>02</span> Bysse</figcaption>
            </figure>
            <figure className="inside-helm">
              <Image src={`${basePath}/images/joelma-hardtop.webp`} alt="Rorplassen under hardtoppen på Joelma" fill sizes="(max-width: 760px) 100vw, 25vw" />
              <figcaption><span>03</span> Rorplass</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="ways wrap" id="seilas" aria-labelledby="ways-title">
        <div className="section-marker"><span>03</span><span>TO MÅTER Å DRA</span></div>
        <div className="ways-main">
          <h2 id="ways-title">Hva slags tur<br />ser du for deg?</h2>
          <div className="way-row">
            <span className="way-number">A</span>
            <div><h3>Med Bjørne som skipper</h3><p>Han kjenner både Joelma og farvannet. Rute og innhold avtales ut fra ønskene deres og forholdene på sjøen.</p></div>
            <span className="way-arrow" aria-hidden="true">↗</span>
          </div>
          <div className="way-row">
            <span className="way-number">B</span>
            <div><h3>Leie uten mannskap</h3><p>Vil du føre båten selv? Snakk med Bjørne om erfaring, seilingsområde og hva leien innebærer.</p></div>
            <span className="way-arrow" aria-hidden="true">↗</span>
          </div>
          <p className="ways-note">Varighet, avreisehavn og praktiske vilkår avklares før turen.</p>
        </div>
      </section>

      <footer className="contact" id="kontakt">
        <div className="wrap contact-inner">
          <div><p className="overline">KVERNMO HALIBUT · VEST-FINNMARK</p><h2>En tur begynner<br />med et spørsmål.</h2></div>
          <p className="contact-instruction">Dato, antall personer og om dere ønsker skipper eller egen leie er et fint sted å begynne. Kontaktopplysninger legges inn når de er avklart.</p>
          <div className="contact-bottom"><span>Uforpliktende konseptutkast</span><a href="#top">Til toppen ↑</a></div>
        </div>
      </footer>
    </main>
  );
}
