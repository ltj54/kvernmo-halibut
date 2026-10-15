# Kvernmo Halibut – nettsideutkast

Selvstendig, statisk Next.js-prosjekt for Kvernmo Halibut. Bjørne har sett og gitt positiv tilbakemelding på konseptet. Siden er fortsatt merket som et ikke-bindende konseptutkast. Den inneholder ingen booking eller betaling. Den engelske siden ligger på `/en/`.

## Før et domene kobles til

- Velg domenet sammen med Bjørne. `fjordhavsel.no` kan vurderes siden han allerede betaler for det; domenet er ikke koblet til her.
- Offentlig e-postadresse og telefon er bekreftet av Bjørne og samlet i `src/app/business-details.ts`. Turvalg og kontakt er samlet i samme seksjon. Begge turtyper bruker én dialog og samme mottakeradresse. Dialogen sender JSON direkte til FormSubmit over HTTPS; besøkeren trenger ikke e-postprogram. FormSubmit må aktiveres fra mottakerens e-post før leveransen kan regnes som ferdig oppsatt.
- Organisasjonsnummeret er 938 584 346, kontrollert hos Brønnøysundregistrene 15.10.2026 og samlet i `src/app/business-details.ts`.
- Bjørne har oppgitt planlagt start for nye turer fra cirka 20. november 2026, planlagt avreise fra Bukta og henting på Alta lufthavn. Bekreft endelig oppstart, kaiplass og eventuelle vilkår for transporten før ferdig lansering.
- Døgnprisen er fortsatt veiledende og gjelder båten med skipper. Den inkluderer skipper, drivstoff, tre måltider per dag og sengetøy, samt eventuell kokk etter avtale. Turvarighet, endelig pris og vilkår for leie uten mannskap gjenstår.
- Anbefalt gruppestørrelse er 5–6 gjester; dette er ikke en opplysning om maksimal passasjerkapasitet. Ni køyeplasser vises separat. Reiseavsnittet lenker til Avinor og oppgir ingen bestemt flytid.
- Søk om relevante oppføringer hos reiselivsaktører/portaler og avklar deres vilkår før noen booking- eller provisjonsforpliktelse.
- Koble først deretter domenet, slå på indeksering og verifiser eierskap i Google Search Console.

Sitemap, canonical/hreflang, Open Graph, organisasjonsmetadata og `robots.txt` bygges fra miljøvariabler. GitHub-forhåndsvisningen er noindex/disallow som standard. Ikke slå på indeksering før riktig domene er valgt og siden er klar.

For et eget domene settes `SITE_URL` til den kanoniske HTTPS-adressen, `SITE_INDEXABLE=true` og GitHub Actions-variabelen `GITHUB_PAGES=false`. GitHub Actions-variabler `SITE_URL`, `SITE_INDEXABLE` og eventuelt `GOOGLE_SITE_VERIFICATION` gjør byggingen klar når domenet er bestemt. Standardverdien `GITHUB_PAGES=true` beholder dagens forhåndsvisningssti. DNS, HTTPS og et eventuelt `CNAME` må først settes opp for det valgte domenet. `.env.example` viser konfigurasjonsfeltene; faktiske nøkler/verdier skal ikke committes.

## Lokal oppstart

Krever Node.js 24 og npm. Kjør fra prosjektmappen:

```powershell
npm ci
npm run dev
```

Åpne `http://127.0.0.1:3000`. `npm run lint`, `npm run typecheck`, `npm test` og `npm run build` kontrollerer prosjektet. Innsendingstestene bruker simulerte nettverkskall og sender ingen e-poster. Bygget eksporteres statisk til `out/`.

## Innsending av forespørsler

- Leverandør: [FormSubmit](https://formsubmit.co/documentation), AJAX-endepunkt bygget fra den bekreftede offentlige mottakeradressen. Ingen API-nøkkel eller hemmelighet legges i nettleserkoden.
- Første reelle innsending kan utløse en aktiveringsmail til Bjørne. Han må bekrefte mottakeradressen. Sjekk også søppelpost. En senere test må bekreftes mottatt i innboksen før siden omtales som ferdig testet for e-postlevering.
- Dialogen beholder opplysningene ved feil og viser bare bekreftelse når tjenesten bekrefter mottak. Aktiveringssvar vises separat. Bekreftet mottak hos tjenesten er ikke bevis på at e-posten er levert i innboksen.
- Tidsavbrudd etter 20 sekunder, sperre mot doble innsendinger, lengdebegrensninger og et skjult honeypot-felt er lagt inn. Leverandørens standard spambeskyttelse er ikke deaktivert. Overvåk søppelpost og misbruk etter lansering.
- Avsenderens adresse brukes som Reply-To. Ingen automatisk svarmail eller kopi til andre mottakere er aktivert.
- Personverninformasjon ligger i dialogen. FormSubmit oppgir [30 dagers lagring](https://formsubmit.co/documentation) av innsendinger; se [leverandørens personvernerklæring](https://formsubmit.co/privacy.pdf). Skjemadata lagres ikke i prosjektet eller nettleserlagring.
- Direkte e-post- og telefonlenker er tilgjengelige dersom tjenesten feiler.

## Struktur

- `src/app/`: konseptside, stil og metadata.
- `src/app/(english)/en/`: engelskspråklig landingsside med korrekt `lang="en"`.
- `src/app/site-config.ts`, `src/app/robots.ts`, `src/app/sitemap.ts`: domeneavhengig metadata og søkemotorfiler.
- `public/images/`: nettoptimaliserte arbeidskopier av de seks bildene Bjørne sendte til konseptarbeidet. Originalene ligger ikke i prosjektet.
- `KRAVSPESIFIKASJON.md`: lokal, intern oversikt over bekreftede fakta, forslag og åpne spørsmål; ikke med i offentlig Git-repository.
- `AVTALEUTKAST_NETTSIDE_OG_DRIFT.md`: lokalt, internt avtaleutkast; ikke sendt, inngått eller publisert i Git-repository.
- `.github/workflows/pages.yml`: bygger og publiserer ved bevisst push til `main`.

Repository: `https://github.com/ltj54/kvernmo-halibut`. GitHub Pages-forhåndsvisning: `https://ltj54.github.io/kvernmo-halibut/`. For lokal Pages-test: sett `GITHUB_PAGES=true` før `npm run build`.

En kontrollert første commit og push kan brukes til førstegangspublisering. Etter den første publiseringen blir senere endringer **ikke** commitet eller pushet uten en ny uttrykkelig bestilling fra Lars. Lokale kommandoer committer eller pusher aldri automatisk.

Private e-poster, fakturaer, personopplysninger, kundebilder uten publiseringstillatelse og interne notater hører hjemme utenfor offentlig repository, eksempelvis lokalt i ignorert `private/`. `.gitignore` fjerner ikke allerede publisert historikk.
