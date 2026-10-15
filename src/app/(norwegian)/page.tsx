import Image from "next/image";
import BoatInfo from "../boat-info";
import PhotoLightbox from "../photo-lightbox";
import { formattedOrganizationNumber } from "../business-details";
import { mapLinks } from "../map-links";
import TripContact from "../trip-contact";

const basePath = process.env.GITHUB_PAGES === "true" ? "/kvernmo-halibut" : "";
const anchors = { top: "#top", boat: "#joelma", fjord: "#fjorden", trips: "#turer" };

export default function Home() {
  return (
      <main id="top" lang="nb">
      <div className="draft-note">Et uforpliktende forslag til nettside for Kvernmo Halibut</div>

      <header className="site-header">
        <a className="brand" href={anchors.top} aria-label="Kvernmo Halibut, til toppen">
          <span className="brand-name">Kvernmo Halibut</span>
          <small>Turer på Altafjorden</small>
        </a>
        <nav aria-label="Hovedmeny">
          <a href={anchors.boat}>Båten</a>
          <a href={anchors.fjord}>Fjorden</a>
          <a href={anchors.trips}>Turer og leie</a>
          <div className="language-switch" aria-label="Velg språk">
            <span aria-current="page" lang="nb">NO</span>
            <a href={`${basePath}/en/`} lang="en" hrefLang="en" aria-label="English">EN</a>
          </div>
        </nav>
        <a className="header-button" href={anchors.trips}>Se mulighetene <span aria-hidden="true">↓</span></a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="location-label"><span aria-hidden="true">●</span> Vest-Finnmark</p>
          <h1 id="hero-title">Altafjorden med Joelma</h1>
          <p>Bjørne leier ut Joelma, en Nauticat 525 med ni køyeplasser. Bli med ham som skipper, eller lei båten uten mannskap etter avtale.</p>
          <div className="hero-links">
            <a className="button button-dark" href={anchors.boat}>Møt Joelma</a>
            <a className="plain-link" href={anchors.trips}>Se turmulighetene <span aria-hidden="true">→</span></a>
          </div>
          <p className="hero-aside">Hval, spekkhogger og nordlys kan dukke opp. Det er naturen som bestemmer.</p>
        </div>
        <figure className="hero-photo">
          <PhotoLightbox src={`${basePath}/images/joelma-seilas.webp`} alt="Utsikten fra dekket på Joelma under seilas">
            <Image src={`${basePath}/images/joelma-seilas.webp`} alt="" fill priority loading="eager" sizes="(max-width: 760px) 100vw, 58vw" />
          </PhotoLightbox>
          <figcaption>Ute på sjøen med Joelma</figcaption>
        </figure>
      </section>

      <section className="boat-section" id="joelma" aria-labelledby="boat-title">
        <div className="section-inner boat-layout">
          <figure className="boat-photo">
            <PhotoLightbox src={`${basePath}/images/joelma-korsfjord.webp`} alt="Joelma i Korsfjord">
              <Image src={`${basePath}/images/joelma-korsfjord.webp`} alt="" fill sizes="(max-width: 760px) 100vw, 52vw" />
            </PhotoLightbox>
            <figcaption>Joelma i Korsfjord</figcaption>
          </figure>
          <div className="boat-copy">
            <p className="section-label">Båten</p>
            <div className="boat-title-row"><h2 id="boat-title">Dette er Joelma</h2><BoatInfo /></div>
            <p>Joelma er en Nauticat 525 motorseiler. Det er god plass om bord, enten du vil på tur med Bjørne eller ønsker å leie båten på egen hånd. Bjørne kjenner både båten og fjordene her nord.</p>
            <p className="winter-note">Joelma har et isolert overbygg med oppvarming, tilpasset bruk i den kalde årstiden.</p>
            <dl className="boat-details">
              <div><dt>Båttype</dt><dd>Motorseiler</dd></div>
              <div><dt>Modell</dt><dd>Nauticat 525</dd></div>
              <div><dt>Køyeplasser</dt><dd>9</dd></div>
              <div><dt>Anbefalt gruppestørrelse</dt><dd>5–6 gjester</dd></div>
              <div><dt>Planlagt avreisehavn</dt><dd>Bukta, Alta</dd></div>
              <div><dt>Leie</dt><dd>Med eller uten skipper</dd></div>
            </dl>
            <div className="price-box">
              <span>Veiledende døgnpris med skipper</span>
              <strong>I underkant av 10&nbsp;000 kr</strong>
              <ul className="price-includes" aria-label="Inkludert i døgnprisen">
                <li>Skipper og drivstoff</li>
                <li>Tre måltider per dag</li>
                <li>Sengetøy</li>
              </ul>
              <small>Eventuell kokk inngår etter avtale. Prisen gjelder båten med skipper og avhenger blant annet av gruppestørrelse. Endelig pris avtales med Bjørne. Pris og vilkår for leie uten mannskap avtales separat.</small>
            </div>
          </div>
        </div>
      </section>

      <section className="fjord-section" id="fjorden" aria-labelledby="fjord-title">
        <div className="section-inner fjord-layout">
          <div className="fjord-copy">
            <p className="section-label">Rundt Altafjorden og Årøya</p>
            <h2 id="fjord-title">Fjorder og sund rundt Altafjorden</h2>
            <p>Langfjord, Stjernsund, Rognsund og Vargsund – dette er noen av farvannene Bjørne kjenner. Her finnes det sild, og i sesong kan man også være heldig å se hval eller spekkhogger.</p>
            <p className="plain-note">Hvor turen går, kommer an på vær, forhold og hva dere har lyst til. Dyreliv kan ikke loves.</p>
          </div>
          <div className="chart-map">
            <figure className="chart-photo">
              <PhotoLightbox src={`${basePath}/images/altafjord-kart.webp`} alt="Sjøkart over Altafjorden og sundene rundt Årøya">
                <Image src={`${basePath}/images/altafjord-kart.webp`} alt="" fill sizes="(max-width: 760px) 100vw, 55vw" />
              </PhotoLightbox>
              <figcaption>Kart over Altafjorden</figcaption>
            </figure>
            <a className="maps-link" href={mapLinks.altafjord} target="_blank" rel="noreferrer">
              Se Altafjorden i Google Maps <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="straits" aria-label="Fjord og sund i området">
            <a href={mapLinks.langfjord} target="_blank" rel="noreferrer">Langfjord <span aria-hidden="true">↗</span></a>
            <a href={mapLinks.stjernsund} target="_blank" rel="noreferrer">Stjernsund <span aria-hidden="true">↗</span></a>
            <a href={mapLinks.rognsund} target="_blank" rel="noreferrer">Rognsund <span aria-hidden="true">↗</span></a>
            <a href={mapLinks.vargsund} target="_blank" rel="noreferrer">Vargsund <span aria-hidden="true">↗</span></a>
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
              <PhotoLightbox src={`${basePath}/images/joelma-oppholdsrom.webp`} alt="Oppholdsrommet om bord på Joelma">
                <Image src={`${basePath}/images/joelma-oppholdsrom.webp`} alt="" fill sizes="(max-width: 760px) 100vw, 46vw" />
              </PhotoLightbox>
              <figcaption>Oppholdsrom</figcaption>
            </figure>
            <figure>
              <PhotoLightbox src={`${basePath}/images/joelma-bysse.webp`} alt="Byssa om bord på Joelma">
                <Image src={`${basePath}/images/joelma-bysse.webp`} alt="" fill sizes="(max-width: 760px) 100vw, 27vw" />
              </PhotoLightbox>
              <figcaption>Bysse</figcaption>
            </figure>
            <figure>
              <PhotoLightbox src={`${basePath}/images/joelma-hardtop.webp`} alt="Styreplassen under hardtoppen på Joelma">
                <Image src={`${basePath}/images/joelma-hardtop.webp`} alt="" fill sizes="(max-width: 760px) 100vw, 27vw" />
              </PhotoLightbox>
              <figcaption>Styreplass under hardtop</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="trips-section" id="turer" aria-labelledby="trips-title">
        <div className="section-inner">
          <h2 id="trips-title">Med skipper eller uten mannskap</h2>
          <p className="season-note">Planlagt oppstart for nye turer: fra ca. <time dateTime="2026-11-20">20. november 2026</time>. Ta kontakt for å avtale dato og varighet.</p>
          <div className="trip-options">
            <article>
              <div><h3>Tur med Bjørne som skipper</h3><p>Bjørne tar roret og viser dere farvannet. Sammen finner dere ut hvor turen skal gå, ut fra vær og ønsker.</p></div>
            </article>
            <article>
              <div><h3>Lei Joelma uten mannskap</h3><p>Vil dere dra på egen hånd? Ta en prat med Bjørne om erfaring, seilingsområde og hva som følger med leien.</p></div>
            </article>
          </div>
          <p className="trip-note">Joelma passer best for en gruppe på 5–6 gjester. Turens lengde og det praktiske opplegget avtales med Bjørne.</p>
          <TripContact />
        </div>
      </section>

      <section className="travel-section" id="reise" aria-labelledby="travel-title">
        <div className="section-inner travel-layout">
          <div className="travel-copy">
            <p className="section-label">Praktisk informasjon</p>
            <h2 id="travel-title">Reisen til Alta</h2>
            <p>Du kan fly direkte fra Oslo Gardermoen til Alta. Reisetiden avhenger av avgangen du velger; en forbindelse med mellomlanding tar lengre tid.</p>
            <div className="travel-links">
              <a href="https://www.avinor.no/flyplass/alta/" target="_blank" rel="noreferrer">Alta lufthavn · flyinformasjon <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <div className="travel-details">
            <h3>Fra flyplassen til båten</h3>
            <p>For turene planlegges avreise fra Bukta i Alta, noen hundre meter fra flyplassen. Bjørne møter gjestene på Alta lufthavn med navneskilt og kjører dem til båten. Avtal ankomst og henting på forhånd.</p>
            <p className="travel-note">Joelma ligger foreløpig i Korsfjord, en sidefjord til Altafjorden, og skal flyttes til Bukta før turene.</p>
            <h3>Før du bestiller reisen</h3>
            <p>Avtal dato, varighet og turmuligheter først. Fortell gjerne om du ønsker en dagstur eller en lengre seilas, og om det er hval, spekkhogger eller selve seilasen du er mest interessert i.</p>
            <p className="travel-note">Turen planlegges etter sesong, vær og forhold på fjorden. Observasjoner av dyreliv og nordlys kan ikke garanteres.</p>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="section-inner">
          <div className="footer-bottom"><span>Uforpliktende konseptutkast</span><span>Kvernmo Halibut · Org.nr. {formattedOrganizationNumber}</span><a href={anchors.top}>Til toppen ↑</a></div>
        </div>
      </footer>
    </main>
  );
}
