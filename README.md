# Kvernmo Halibut – nettsideutkast

Selvstendig, statisk Next.js-prosjekt for Kvernmo Halibut. Bjørne har sett og gitt positiv tilbakemelding på konseptet. Siden er fortsatt merket som et ikke-bindende konseptutkast: den inneholder ingen aktiv booking, betaling eller innsending av forespørsler. Den engelske siden ligger på `/en/`.

## Før et domene kobles til

- Velg domenet sammen med Bjørne. `fjordhavsel.no` kan vurderes siden han allerede betaler for det; domenet er ikke koblet til her.
- Avklar hvilken e-postadresse eller hvilket telefonnummer som skal stå offentlig. Forespørselsdialogen er bare en demonstrasjon og sender ingenting.
- Organisasjonsnummeret er 938 584 346, kontrollert hos Brønnøysundregistrene 15.10.2026 og samlet i `src/app/business-details.ts`.
- Bekreft endelig prisformulering, avreisehavn, leievilkår og nøyaktig informasjon om vinterisolert overbygg/oppvarming.
- Bekreft oppmøtested, transport fra flyplassen, når turer kan tilbys, antall gjester per tur og hva døgnprisen inkluderer. Ni køyeplasser er ikke en bekreftelse på gjestekapasitet på tur. Siden viser generell reiseinformasjon og lenker til Avinor; den oppgir ingen bestemt flytid eller hentetjeneste.
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

Åpne `http://127.0.0.1:3000`. `npm run lint`, `npm run typecheck` og `npm run build` kontrollerer prosjektet. Bygget eksporteres statisk til `out/`.

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
