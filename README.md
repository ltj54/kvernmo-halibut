# Kvernmo Halibut – uforpliktende nettsideutkast

Selvstendig Next.js 16-prosjekt for et første visuelt konsept. Siden er ikke godkjent av Kvernmo Halibut og er ikke en aktiv booking- eller salgsflate. Ekte bilder, kontaktmetode, domene, turpriser og praktiske vilkår er ikke mottatt/avklart.

## Lokal oppstart

Krever Node.js 24 og npm. Kjør fra prosjektmappen:

```powershell
npm ci
npm run dev
```

Åpne `http://127.0.0.1:3000`. `npm run lint`, `npm run typecheck` og `npm run build` kontrollerer prosjektet. Bygget eksporteres statisk til `out/`.

## Struktur

- `src/app/`: konseptside, stil og metadata.
- `public/`: illustrert plassholder. Den er ikke et foto av Bjørnes båt.
- `KRAVSPESIFIKASJON.md`: lokal, intern oversikt over bekreftede fakta, forslag og åpne spørsmål; ikke med i offentlig Git-repository.
- `AVTALEUTKAST_NETTSIDE_OG_DRIFT.md`: lokalt, internt avtaleutkast; ikke sendt, inngått eller publisert i Git-repository.
- `.github/workflows/pages.yml`: bygger og publiserer ved bevisst push til `main`.

Planlagt repository: `https://github.com/ltj54/kvernmo-halibut`. Første forhåndsvisning: `https://ltj54.github.io/kvernmo-halibut/` når GitHub Pages er aktivert og verifisert. For lokal Pages-test: sett `GITHUB_PAGES=true` og `NEXT_PUBLIC_BASE_PATH=/kvernmo-halibut` før `npm run build`.

En kontrollert første commit og push kan brukes til førstegangspublisering. Etter den første publiseringen blir senere endringer **ikke** commitet eller pushet uten en ny uttrykkelig bestilling fra Lars. Lokale kommandoer committer eller pusher aldri automatisk.

Private e-poster, fakturaer, personopplysninger, kundebilder uten publiseringstillatelse og interne notater hører hjemme utenfor offentlig repository, eksempelvis lokalt i ignorert `private/`. `.gitignore` fjerner ikke allerede publisert historikk.
