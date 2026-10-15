import Image from "next/image";
import InquiryDialog from "../../inquiry-dialog";
import BoatInfo from "../../boat-info";
import PhotoLightbox from "../../photo-lightbox";
import { formattedOrganizationNumber } from "../../business-details";
import { mapLinks } from "../../map-links";

const basePath = process.env.GITHUB_PAGES === "true" ? "/kvernmo-halibut" : "";
const anchors = { top: "#top", boat: "#joelma", fjord: "#fjorden", trips: "#turer" };

export default function EnglishHome() {
  return (
    <main id="top" lang="en">
      <div className="draft-note">A non-binding website concept for Kvernmo Halibut</div>

      <header className="site-header">
        <a className="brand" href={`${basePath}/en/#top`} aria-label="Kvernmo Halibut, back to top">
          <span className="brand-name">Kvernmo Halibut</span>
          <small>Trips on Altafjord</small>
        </a>
        <nav aria-label="Main menu">
          <a href={anchors.boat}>The boat</a>
          <a href={anchors.fjord}>The fjord</a>
          <a href={anchors.trips}>Trips &amp; rental</a>
          <div className="language-switch" aria-label="Choose language">
            <a href={`${basePath}/`} lang="nb" hrefLang="nb" aria-label="Norsk">NO</a>
            <span aria-current="page" lang="en">EN</span>
          </div>
        </nav>
        <a className="header-button" href={anchors.trips}>Explore your options <span aria-hidden="true">↓</span></a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="location-label"><span aria-hidden="true">●</span> Western Finnmark, Northern Norway</p>
          <h1 id="hero-title">Explore Altafjord aboard Joelma</h1>
          <p>Come aboard Joelma, a Nauticat 525 motor sailer with nine berths. Join Bjørne as skipper, or ask about renting the boat without crew.</p>
          <div className="hero-links">
            <a className="button button-dark" href={anchors.boat}>Meet Joelma</a>
            <a className="plain-link" href={anchors.trips}>See the trip options <span aria-hidden="true">→</span></a>
          </div>
          <p className="hero-aside">Whales, orcas and northern lights may make an appearance. Nature decides, so sightings cannot be guaranteed.</p>
        </div>
        <figure className="hero-photo">
          <PhotoLightbox src={`${basePath}/images/joelma-seilas.webp`} alt="View from Joelma's deck while sailing">
            <Image src={`${basePath}/images/joelma-seilas.webp`} alt="" fill priority loading="eager" sizes="(max-width: 760px) 100vw, 58vw" />
          </PhotoLightbox>
          <figcaption>Out on the fjord aboard Joelma</figcaption>
        </figure>
      </section>

      <section className="boat-section" id="joelma" aria-labelledby="boat-title">
        <div className="section-inner boat-layout">
          <figure className="boat-photo">
            <PhotoLightbox src={`${basePath}/images/joelma-korsfjord.webp`} alt="Joelma in Korsfjord">
              <Image src={`${basePath}/images/joelma-korsfjord.webp`} alt="" fill sizes="(max-width: 760px) 100vw, 52vw" />
            </PhotoLightbox>
            <figcaption>Joelma in Korsfjord</figcaption>
          </figure>
          <div className="boat-copy">
            <p className="section-label">The boat</p>
            <div className="boat-title-row"><h2 id="boat-title">Meet Joelma</h2><BoatInfo language="en" /></div>
            <p>Joelma is a Nauticat 525 motor sailer with room to settle in, whether you are travelling with Bjørne or renting the boat on your own by arrangement. Bjørne knows both the boat and these northern fjords well.</p>
            <p className="winter-note">Joelma has an insulated, heated enclosure, designed for use during the colder months.</p>
            <dl className="boat-details">
              <div><dt>Boat type</dt><dd>Motor sailer</dd></div>
              <div><dt>Model</dt><dd>Nauticat 525</dd></div>
              <div><dt>Berths</dt><dd>9</dd></div>
              <div><dt>Rental</dt><dd>With or without skipper</dd></div>
            </dl>
            <div className="price-box">
              <span>Indicative 24-hour rate</span>
              <strong>Just under NOK 10,000</strong>
              <small>The price depends in part on group size. Bjørne will confirm the final price.</small>
            </div>
          </div>
        </div>
      </section>

      <section className="fjord-section" id="fjorden" aria-labelledby="fjord-title">
        <div className="section-inner fjord-layout">
          <div className="fjord-copy">
            <p className="section-label">Around Altafjord and Årøya</p>
            <h2 id="fjord-title">Fjords and sounds of Altafjord</h2>
            <p>Langfjord, Stjernsund, Rognsund and Vargsund are among the waters Bjørne knows. Herring, whales and orcas are part of the region, and sightings may be possible in season.</p>
            <p className="plain-note">The route depends on weather, conditions and what you would like to do. Wildlife sightings cannot be promised.</p>
          </div>
          <div className="chart-map">
            <figure className="chart-photo">
              <PhotoLightbox src={`${basePath}/images/altafjord-kart.webp`} alt="Nautical chart of Altafjord and the sounds around Årøya">
                <Image src={`${basePath}/images/altafjord-kart.webp`} alt="" fill sizes="(max-width: 760px) 100vw, 55vw" />
              </PhotoLightbox>
              <figcaption>Chart of Altafjord</figcaption>
            </figure>
            <a className="maps-link" href={mapLinks.altafjord} target="_blank" rel="noreferrer">
              Find Altafjord on Google Maps <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="straits" aria-label="Fjords and sounds in the area">
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
            <div><p className="section-label">A look on board</p><h2 id="inside-title">Come aboard and have a look</h2></div>
            <p>Here are the galley, saloon and helm beneath the hardtop.</p>
          </div>
          <div className="inside-gallery">
            <figure className="inside-room">
              <PhotoLightbox src={`${basePath}/images/joelma-oppholdsrom.webp`} alt="Saloon aboard Joelma">
                <Image src={`${basePath}/images/joelma-oppholdsrom.webp`} alt="" fill sizes="(max-width: 760px) 100vw, 46vw" />
              </PhotoLightbox>
              <figcaption>Saloon</figcaption>
            </figure>
            <figure>
              <PhotoLightbox src={`${basePath}/images/joelma-bysse.webp`} alt="Galley aboard Joelma">
                <Image src={`${basePath}/images/joelma-bysse.webp`} alt="" fill sizes="(max-width: 760px) 100vw, 27vw" />
              </PhotoLightbox>
              <figcaption>Galley</figcaption>
            </figure>
            <figure>
              <PhotoLightbox src={`${basePath}/images/joelma-hardtop.webp`} alt="Helm beneath the hardtop aboard Joelma">
                <Image src={`${basePath}/images/joelma-hardtop.webp`} alt="" fill sizes="(max-width: 760px) 100vw, 27vw" />
              </PhotoLightbox>
              <figcaption>Helm beneath the hardtop</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="trips-section" id="turer" aria-labelledby="trips-title">
        <div className="section-inner">
          <p className="section-label">Two ways to go</p>
          <h2 id="trips-title">With a skipper or on your own</h2>
          <div className="trip-options">
            <article>
              <span className="option-mark" aria-hidden="true">☺</span>
              <div><h3>A trip with Bjørne as skipper</h3><p>Bjørne takes the helm and shows you the waters. You can plan the route together, depending on the weather and what you would like to see.</p></div>
            </article>
            <article>
              <span className="option-mark" aria-hidden="true">⌁</span>
              <div><h3>Rent Joelma without crew</h3><p>Prefer to go on your own? Talk to Bjørne about experience, sailing area and what is included in the rental.</p></div>
            </article>
          </div>
          <p className="trip-note">Trip length, departure harbour, group size and what the price includes are agreed in advance.</p>
          <InquiryDialog language="en" />
        </div>
      </section>

      <section className="travel-section" id="reise" aria-labelledby="travel-title">
        <div className="section-inner travel-layout">
          <div className="travel-copy">
            <p className="section-label">Practical information</p>
            <h2 id="travel-title">Getting to Alta</h2>
            <p>You can fly directly from Oslo Gardermoen to Alta. Journey times depend on your chosen flight; connecting flights take longer.</p>
            <div className="travel-links">
              <a href="https://www.avinor.no/en/airport/alta/" target="_blank" rel="noreferrer">Alta Airport · flight information <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <div className="travel-details">
            <h3>From the airport to the boat</h3>
            <p>Confirm the departure harbour and meeting point with Bjørne before arranging your onward transport from the airport.</p>
            <h3>Before booking your travel</h3>
            <p>Agree on dates, trip length and options first. Tell Bjørne whether you are interested in a day trip or a longer sailing trip, and whether whales, orcas or sailing itself are your main interest.</p>
            <p className="travel-note">Plans depend on the season, weather and conditions on the fjord. Wildlife and northern lights sightings cannot be guaranteed.</p>
          </div>
        </div>
      </section>

      <footer className="contact" id="kontakt">
        <div className="section-inner contact-layout">
          <div><p className="section-label">Kvernmo Halibut · Western Finnmark</p><h2>Talk to Bjørne about a trip.</h2></div>
          <p>Tell him when you hope to travel, how many people are coming and whether you would like a skipper. The contact method is being finalized with Bjørne.</p>
          <div className="footer-bottom"><span>Non-binding concept preview</span><span>Kvernmo Halibut · Org. no. {formattedOrganizationNumber}</span><a href={anchors.top}>Back to top ↑</a></div>
        </div>
      </footer>
    </main>
  );
}
