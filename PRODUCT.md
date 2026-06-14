# Product

## Register

brand

## Users

**Anna i jej koledzy po fachu** — koordynatorzy domów kultury, nauczyciele, liderzy lokalnych NGO, kadry instytucji publicznych i samorządów. Wtórnie: edukatorzy oraz studenci/odbiorcy ciekawi działań fundacji.

Kontekst użycia: ktoś „z góry" (dyrekcja, zarząd, grant) postawił przed nimi temat AI. Czują presję i lekki niepokój — nie są ekspertami, boją się, że temat ich przerośnie albo że trafią na technologicznego sprzedawcę zasypującego żargonem. Wchodzą na stronę wieczorem, między obowiązkami, często z linku od znajomego, z jednym pytaniem w głowie: **„czy to są ludzie, którym mogę zaufać i którzy zrobią to po ludzku?"**

Zadanie do wykonania (job-to-be-done): w ~60 sekund rozstrzygnąć, czy Lucid Academy to poważny, ludzki partner do oswojenia AI — a jeśli tak, w naturalny sposób przejść do kontaktu.

## Product Purpose

Strona-wizytówka (one-pager) fundacji **Lucid Academy** — organizacji łączącej edukację o AI, kulturę, wspólnotę, technologię i projekty społeczne. Strona rozbraja obawy przed sztuczną inteligencją, pokazując ją jako narzędzie wzmacniające wspólnotę, kulturę i relacje, a nie je zastępujące.

Siedem sekcji prowadzi odbiorcę od pierwszego wrażenia, przez zrozumienie oferty (edukacja o AI, projekty cyfrowo-społeczne, facylitacja), aż po naturalną decyzję o kontakcie: `#hero → #misja → #uniwersytet → #oferta → #co-robimy → #zespol → #kontakt`.

**Sukces:** odbiorca czuje „to poważny, ludzki partner" i ufa fundacji. Konwersja (mail / telefon) jest naturalną konsekwencją zbudowanego zaufania, nie celem wymuszanym agresywnym CTA. Kontakt to wyłącznie `mailto:` / telefon — brak formularzy serwerowych, kont, płatności, CMS, wielojęzyczności (na razie tylko PL).

## Brand Personality

**Trzy słowa:** Światło · Wspólnota · Precyzja.

Głos i ton: spokojny, inteligentny, ludzki. Mówi prosto o trudnej technologii — bez żargonu i bez bezkrytycznego zachwytu, ale i bez protekcjonalności. Refleksyjny tam, gdzie inni sprzedają; konkretny tam, gdzie inni są mgliści. Premium, ale ciepły — fundacyjny, nie korporacyjny.

Cele emocjonalne: **zaufanie** przede wszystkim, dalej **spokój** (rozbrojenie niepokoju przed AI), **zrozumienie** (nikt nie czuje się zagubiony) i **świetlistość** — wrażenie, że ze zrozumienia AI wyłania się sieć realnych, ludzkich działań.

Metafora przewodnia: **linia, która staje się siecią** — jeden impuls zrozumienia rozgałęzia się w sieć edukacji, ludzi, instytucji i projektów.

## Anti-references

Potwierdzone przez użytkownika jako najważniejsze do uniknięcia:

- **Zimny startup SaaS / korporacyjny consulting** — hero-metryki, identyczne siatki kart, żargon B2B, estetyka „narzędzia". Lucid Academy to fundacja, nie produkt SaaS.
- **Urzędowa strona instytucji publicznej** — sucha, akademicka, biuletynowa estetyka administracji. Zero premium, zero charakteru.

Dodatkowo (z DESIGN_SYSTEM, w mocy):

- **Dystopijny cyberpunk** — agresywny chaos neonów, azjatyckie znaki, reklamy, glitch jako stały efekt, klimat gamingowy/horror, technologia jako zagrożenie.
- **Zimne laboratorium AI** — sterylna, kliniczna estetyka bez ciepła, wspólnoty i ludzkiego wymiaru.

## Design Principles

1. **Zaufanie zanim akcja.** Każda sekcja najpierw buduje wiarygodność i poczucie „to ludzie", a dopiero potem zaprasza do ruchu. Kontakt jest konsekwencją zaufania, nie żądaniem.
2. **Po ludzku, nie po sprzedażowemu.** Tłumaczymy trudne rzeczy prosto, bez żargonu i bez technologicznego onieśmielania. Refleksja zostaje na dłużej niż konkretna wersja chatbota.
3. **Światło z ciemności.** AI nie jest magią ani zagrożeniem — jest tematem wymagającym świadomości. Wizualnie: spokój, czytelna hierarchia, brak chaosu i agresywnych efektów; światło jako metafora zrozumienia.
4. **Linia, która staje się siecią.** Jedna spójna metafora prowadzi przez całą stronę: od pojedynczego impulsu po sieć ludzi, instytucji i projektów. Spójność narracyjna ponad efektowność pojedynczych sekcji.
5. **Strona ma oddychać.** Lepiej mniej elementów niż więcej. Krótkie bloki tekstu, mocne nagłówki, punktowy glow („jeśli wszystko świeci, nic nie świeci"). Premium przez przestrzeń i precyzję, nie przez przeładowanie.

## Accessibility & Inclusion

**Cel: WCAG 2.1 AA** — zobowiązanie projektowe, istotne wobec audytorium obejmującego seniorów i kadry instytucji publicznych.

- Kontrast: tekst zwykły ≥4.5:1, duży tekst ≥3:1 — szczególna czujność przy jasnym tekście na ciemnym, fioletowym tle i przy tekście w kolorach akcentowych (neon na długich fragmentach zakazany).
- Pełna obsługa klawiatury i widoczne focus states na wszystkich elementach interaktywnych.
- Semantyka: jeden `<h1>` (Hero), sekcje jako `<h2>`, sensowne `alt`, `lang="pl"`.
- `prefers-reduced-motion: reduce` obowiązkowo — statyczny glow zamiast animacji, brak parallaxu i pulsowania, linia widoczna bez rysowania.
- Klikalny kontakt wyłącznie przez `mailto:` / `tel:` (brak formularzy serwerowych).
