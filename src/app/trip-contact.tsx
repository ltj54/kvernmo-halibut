import { contactDetails } from "./business-details";
import InquiryDialog from "./inquiry-dialog";

export default function TripContact({ language = "nb" }: Readonly<{ language?: "nb" | "en" }>) {
  const isEnglish = language === "en";

  return (
    <div className="trip-contact" id="kontakt">
      <div>
        <h3>{isEnglish ? "Contact Bjørne" : "Kontakt Bjørne"}</h3>
        <p>{isEnglish
          ? "Contact Bjørne about dates, trip length and what you would like to do."
          : "Ta kontakt om dato, varighet og hva dere ønsker av turen."}</p>
        <InquiryDialog language={language} />
      </div>
      <address className="contact-links">
        <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
        <a href={`tel:${contactDetails.telephone}`}>{contactDetails.formattedTelephone}</a>
      </address>
    </div>
  );
}
