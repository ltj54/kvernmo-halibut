// Verified against Brønnøysundregistrene on 2026-10-15:
// https://virksomhet.brreg.no/nb/oppslag/enheter/938584346
export const organizationNumber = "938584346";
export const formattedOrganizationNumber = `${organizationNumber.slice(0, 3)} ${organizationNumber.slice(3, 6)} ${organizationNumber.slice(6)}`;

// Public contact details supplied by Bjørne for the website, 2026-10-15.
export const contactDetails = {
  email: "selbjoerne@gmail.com",
  telephone: "+4797096499",
  formattedTelephone: "+47 970 96 499",
};

export const inquiryEndpoint = `https://formsubmit.co/ajax/${contactDetails.email}`;
