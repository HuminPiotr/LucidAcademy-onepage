---
name: Lucid Academy
description: Ciemna, świetlista przestrzeń przyszłości, w której AI zostaje oswojone przez edukację, kulturę i wspólnotę.
colors:
  bg-0: "#07040F"
  bg-1: "#0B0716"
  bg-2: "#13072D"
  bg-3: "#1E1142"
  bg-4: "#2A1A57"
  navy: "#08091E"
  lilac: "#B088F4"
  violet: "#7C4DDB"
  violet-deep: "#4C26AD"
  neon-pink: "#D85CC8"
  hot-pink: "#FF4BF2"
  cyan: "#4BFFFF"
  green: "#7AFF84"
  text-primary: "#F7F2FF"
  text-secondary: "#D8CFF0"
  text-muted: "#AFA3CC"
  text-soft: "#82769F"
  text-on-accent: "#FFFFFF"
typography:
  display:
    fontFamily: "Sora, Inter, Manrope, system-ui, sans-serif"
    fontSize: "clamp(3rem, 7vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Sora, Inter, Manrope, system-ui, sans-serif"
    fontSize: "clamp(2.2rem, 4.5vw, 4.6rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Sora, Inter, Manrope, system-ui, sans-serif"
    fontSize: "clamp(1.35rem, 2vw, 2rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.03em"
  lead:
    fontFamily: "Sora, Inter, Manrope, system-ui, sans-serif"
    fontSize: "clamp(1.05rem, 1.35vw, 1.35rem)"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Sora, Inter, Manrope, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "-0.01em"
  label:
    fontFamily: "Sora, Inter, Manrope, system-ui, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.12em"
rounded:
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  pill: "999px"
spacing:
  "1": "0.25rem"
  "2": "0.5rem"
  "3": "0.75rem"
  "4": "1rem"
  "5": "1.5rem"
  "6": "2rem"
  "7": "3rem"
  "8": "4rem"
  "9": "6rem"
  "10": "8rem"
components:
  button-primary:
    backgroundColor: "linear-gradient(135deg, #7C4DDB 0%, #D85CC8 60%, #FF4BF2 100%)"
    textColor: "{colors.text-on-accent}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "0.85rem 2rem"
  button-primary-hover:
    backgroundColor: "linear-gradient(135deg, #7C4DDB 0%, #D85CC8 50%, #FF4BF2 100%)"
    textColor: "{colors.text-on-accent}"
  button-secondary:
    backgroundColor: "rgba(255, 255, 255, 0.045)"
    textColor: "{colors.text-primary}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "0.85rem 2rem"
  button-secondary-hover:
    backgroundColor: "rgba(124, 77, 219, 0.20)"
    textColor: "{colors.text-primary}"
  card:
    backgroundColor: "rgba(19, 7, 45, 0.72)"
    textColor: "{colors.text-secondary}"
    rounded: "{rounded.lg}"
    padding: "{spacing.6}"
  nav-link:
    textColor: "{colors.text-secondary}"
    typography: "{typography.label}"
  nav-link-active:
    textColor: "{colors.lilac}"
  icon-box:
    backgroundColor: "linear-gradient(135deg, rgba(124, 77, 219, 0.9), rgba(216, 92, 200, 0.7))"
    textColor: "{colors.text-on-accent}"
    rounded: "{rounded.md}"
    size: "3.25rem"
---

# Design System: Lucid Academy

## 1. Overview

**Creative North Star: "Światło, które staje się siecią"**

Lucid Academy nie jest stroną technologiczną ani cyberpunkową dekoracją. To opowieść o tym, jak z niepewności wobec AI wyłania się zrozumienie, a ze zrozumienia powstaje sieć ludzi, instytucji, edukacji i projektów. Wizualnie zaczynamy w ciemności — głęboki granatowo-fioletowy mrok — i wypuszczamy z niej światło: pojedynczy świetlisty impuls na horyzoncie, który prowadzi przez stronę i rozgałęzia się w sieć. Każda sekcja jest kolejnym węzłem tej sieci. To nie ornament; to główna metafora marki, i każda decyzja wizualna ma jej służyć.

Estetyka to **ciemna, świetlista metropolia przyszłości**: warstwowa głębia, subtelny glow, spokojne tempo, premium-cisza. Światło znaczy zrozumienie, więc świeci punktowo i z intencją — nigdy wszędzie naraz. Strona ma oddychać: krótkie bloki tekstu, mocne nagłówki, dużo przestrzeni. Inteligentna i spokojna, technologiczna, ale ludzka; efektowna, ale czytelna; fundacyjna, ale premium.

System ten **odrzuca** trzy rzeczy z całą stanowczością. Nie jest zimnym startupem SaaS (żadnych hero-metryk, identycznych siatek kart, korporacyjnego żargonu). Nie jest urzędową stroną instytucji (żadnej suchej, biuletynowej estetyki administracji). Nie jest dystopijnym cyberpunkiem ani zimnym laboratorium AI (żadnego agresywnego chaosu neonów, azjatyckich znaków, glitchu, klimatu gamingowego — i żadnej sterylnej, klinicznej pustki bez ciepła i wspólnoty).

**Key Characteristics:**
- Ciemna baza (`#07040F`–`#2A1A57`), światło jako rzadki, celowy akcent
- Jedna rodzina typograficzna (Sora) niosąca cały system kontrastem wagi i skali
- Glow zamiast klasycznych cieni — punktowo, nigdy na każdym elemencie
- Spokojne, powolne, opowiadające historię animacje; pełne wsparcie reduced-motion
- Spójna metafora „linia → sieć" prowadząca przez wszystkie sekcje
- Zaufanie i czytelność przed efektem; WCAG 2.1 AA jako zobowiązanie

## 2. Colors

Paleta wynika wprost z grafik fundacji: warstwowy fiolet wschodzący z granatowego mroku, rozświetlony neonowym różem i cyanem. Kolor jest tu głosem — strategia **Committed/Drenched**: ciemna powierzchnia *jest* marką, a akcenty świecą rzadko i mocno.

### Primary
- **Lucid Violet** (`#7C4DDB`): główny kolor marki. Przyciski, aktywne elementy, poświaty, ikony, węzły sieci. To „domyślny" akcent strony.
- **Lilac** (`#B088F4`): jaśniejszy fiolet do nagłówków pomocniczych, świetlistych linii, aktywnego stanu nawigacji i subtelnych podkreśleń na ciemnym tle.
- **Violet Deep** (`#4C26AD`): głębia — gradienty kart, tła wewnętrzne, dolne warstwy poświaty.

### Secondary
- **Neon Pink** (`#D85CC8`): akcent emocjonalny — środek gradientu CTA, wybrane węzły sieci, podkreślenia o cieplejszym tonie niż czysty fiolet.
- **Hot Pink** (`#FF4BF2`): najmocniejszy akcent, używany **bardzo oszczędnie** — szczyt gradientu CTA, hover najważniejszego działania, jeden kluczowy punkt sieci.

### Tertiary
- **Cyan** (`#4BFFFF`): język technologii i danych — świetliste linie, glow połączeń, aktywne punkty. Chłodny kontrapunkt dla fioletu.
- **Signal Green** (`#7AFF84`): wyłącznie statusy pozytywne — „działa", „aktywny", „wdrożone", „w realizacji". Nigdy jako kolor marki ani CTA.

### Neutral
- **Void** (`#07040F`): najciemniejsze tło, baza strony, start hero.
- **Deep Space** (`#0B0716`): alternatywne tło sekcji.
- **Nebula** (`#13072D`) → **Aurora** (`#1E1142`) → **Twilight** (`#2A1A57`): rosnące warstwy fioletu dla kart, bloków, przejść i aktywnych powierzchni.
- **Navy Depth** (`#08091E`): granatowa głębia topbara, cieni i gradientów.
- **Moonlight** (`#F7F2FF`): główne nagłówki i najważniejsze treści.
- **Starlight** (`#D8CFF0`): leady, akapity, opisy — domyślny kolor długiego tekstu.
- **Mist** (`#AFA3CC`): meta, etykiety, podpisy.
- **Dusk** (`#82769F`): nieaktywne linki, pomocnicze dane (tylko duży tekst / elementy nie-krytyczne).

### Named Rules
**The Punctual Glow Rule.** Światło świeci punktowo i z intencją. Jeśli wszystko świeci, nic nie świeci — Hot Pink i Cyan pojawiają się na ≤10% dowolnego ekranu. Ich rzadkość jest sensem.

**The Long-Text Rule.** Długie teksty nigdy nie są czysto białe ani w kolorze neonowym. Domyślny kolor prozy to Starlight (`#D8CFF0`); neon zarezerwowany dla krótkich akcentów i nagłówków pomocniczych.

**The Green-Means-Status Rule.** Signal Green ma jedno znaczenie: pozytywny status. Nigdy jako CTA, nigdy jako kolor marki, nigdy dekoracyjnie.

## 3. Typography

**Display / Body Font:** Sora (z fallbackiem Inter, Manrope, system-ui, sans-serif)

**Character:** Jedna rodzina niesie całą stronę. Sora jest nowoczesna, geometryczna i technologiczna, ale wciąż ciepło-czytelna — pasuje do AI bez wchodzenia w korporacyjny chłód. Hierarchię budujemy kontrastem **wagi i skali** w obrębie jednej rodziny (light 300 ↔ bold 700), nie mieszaniem fontów.

### Hierarchy
- **Display** (700, `clamp(3rem, 7vw, 6rem)`, lh 0.95, ls -0.04em): wyłącznie Hero. Maksymalnie jeden `<h1>` na stronie. Kontrast wagi w obrębie tytułu (np. „Lucid" 300 / „Academy" 700) jest sygnaturą.
- **Headline** (700, `clamp(2.2rem, 4.5vw, 4.6rem)`, lh 1.02, ls -0.04em): główne nagłówki sekcji (`<h2>`).
- **Title** (600, `clamp(1.35rem, 2vw, 2rem)`, lh 1.15, ls -0.03em): karty oferty, bloki projektów, podsekcje (`<h3>`).
- **Lead** (400, `clamp(1.05rem, 1.35vw, 1.35rem)`, lh 1.65): leady pod nagłówkami, wprowadzenia, tekst Hero.
- **Body** (400, `1rem`, lh 1.7): treść. Maksymalna szerokość 65–75ch (długie teksty `max-width: 680px`, leady `760px`).
- **Label** (600, `0.78rem`, ls 0.12em, UPPERCASE): etykiety, meta, eyebrow. Kolor: Lilac lub Cyan.

### Named Rules
**The One-Family Rule.** Cała strona to Sora. Żadnych fontów dekoracyjnych, żadnych zbyt cienkich wag na ciemnym tle. Kontrast robimy wagą i skalą, nie nową rodziną.

**The Eyebrow-Discipline Rule.** Etykieta typu eyebrow (UPPERCASE, tracked) NIE pojawia się nad każdą sekcją — to AI-szablon. Hero ma jedną nazwaną etykietę („FUNDACJA"); poza tym używamy eyebrow tylko tam, gdzie naprawdę wnosi informację. Domyślna kadencja sekcji to sam nagłówek.

**The Dark-Mode-Linespacing Rule.** Jasny tekst na ciemnym tle czyta się jako lżejszy — leady i prozę trzymamy na line-height ≥1.65.

## 4. Elevation

System **nie używa** klasycznych cieni material design. Głębię budujemy dwojako: **warstwowaniem tonalnym** (rosnące fiolety `#07040F`→`#2A1A57` układają powierzchnie w przestrzeni) oraz **poświatą (glow)** — miękkim, kolorowym światłem zamiast szarego cienia. Cień czysto-czarny pojawia się tylko pod kartami premium, by oderwać je od tła; reszta głębi to światło.

### Shadow Vocabulary
- **Glow Violet** (`box-shadow: 0 0 24px rgba(124,77,219,0.38), 0 0 64px rgba(124,77,219,0.18)`): domyślna poświata akcentów, ikon, aktywnych elementów.
- **Glow Cyan** (`box-shadow: 0 0 22px rgba(75,255,255,0.28), 0 0 72px rgba(75,255,255,0.12)`): połączenia, linie, punkty technologiczne.
- **Glow Pink** (`box-shadow: 0 0 24px rgba(255,75,242,0.32), 0 0 72px rgba(255,75,242,0.14)`): najmocniejsze akcenty, hover CTA.
- **Card Premium** (`box-shadow: 0 24px 80px rgba(0,0,0,0.38), inset 0 1px 0 rgba(255,255,255,0.06)`): unosi karty nad tło; wewnętrzny highlight daje krawędź „szkła".

### Named Rules
**The Glow-Not-Shadow Rule.** Domyślnie używamy poświaty, nie cienia. Czarny cień jest dozwolony tylko pod kartami premium dla separacji od tła — nigdy jako dekoracja.

**The Restrained-Glow Rule.** Nie każdy element świeci. Glow jest stanem (hover, aktywność, kluczowy węzeł), nie domyślną dekoracją.

## 5. Components

### Buttons
- **Shape:** miękko zaokrąglone (`0.75rem`, `{rounded.sm}`).
- **Primary:** gradient `linear-gradient(135deg, #7C4DDB → #D85CC8 → #FF4BF2)`, tekst biały, padding `0.85rem 2rem`, typografia Label (UPPERCASE, tracked). Niesie Glow Violet w spoczynku.
- **Hover (Primary):** unosi się o 2px, poświata przechodzi w Glow Pink. Bez migania.
- **Secondary / Ghost:** półprzezroczyste tło `rgba(255,255,255,0.045)`, cienki fioletowy border `rgba(176,136,244,0.28)`, backdrop-blur. Wizualnie spokojniejsze od Primary.
- **Reguła:** maksymalnie jedno CTA Primary na sekcję. Zielony nigdy nie jest CTA. Każdy przycisk ma widoczny focus state.

### Cards / Containers
- **Corner Style:** `1.5rem` (`{rounded.lg}`); duże panele `2rem` (`{rounded.xl}`).
- **Background:** podwójna warstwa — subtelny biały highlight `linear-gradient(180deg, rgba(255,255,255,0.055), rgba(255,255,255,0.025))` na `rgba(19,7,45,0.72)`.
- **Border:** `1px solid rgba(176,136,244,0.18)`; na hover `0.36`.
- **Shadow Strategy:** Card Premium w spoczynku; na hover dochodzi delikatny Glow Violet i `translateY(-4px)`.
- **Internal Padding:** `2rem` (`{spacing.6}`).
- **Zasada:** karta = wyraźny nagłówek + krótki opis + opcjonalna etykieta. Nigdy nadmiar tekstu. **Nigdy karta w karcie.**

### Icon Box
- **Style:** `3.25rem` kwadrat, radius `1rem`, gradient `linear-gradient(135deg, rgba(124,77,219,0.9), rgba(216,92,200,0.7))`, Glow Violet. Ikona liniowa (Lucide / Phosphor / Material Symbols), jeden styl na widok.

### Navigation
- **Style:** sticky topbar, wysokość `80px`. Na starcie Hero przezroczysty i zintegrowany z tłem; po scrollu glassmorphism — `rgba(7,4,15,0.72)` + `blur(18px)` + cienki border `rgba(176,136,244,0.16)`.
- **Links:** typografia Label, kolor Starlight. **Aktywny stan** (Intersection Observer): Lilac + cienka świetlista kreska pod linkiem.
- **Mobile:** hamburger → X, proste rozwijane menu, bez ciężkich animacji.
- **Logo:** klik przewija na samą górę.

### Signature: The Light-Line
Świetlista linia (SVG `stroke-dasharray` / `stroke-dashoffset`) to motyw przewodni: wychodzi ze światła w Hero, rysuje się przy scrollu i rozgałęzia w sieć węzłów (punkty pulsujące 2–3s/cykl, scale 1→1.15→1). Kończy się w Kontakcie jako zaproszenie do rozmowy. To jedyny element, któremu wolno przejść przez wiele sekcji.

## 6. Do's and Don'ts

### Do:
- **Do** trzymać ciemną bazę (`#07040F`–`#2A1A57`) jako powierzchnię marki; światło dawkować punktowo (The Punctual Glow Rule).
- **Do** budować hierarchię kontrastem wagi i skali jednej rodziny Sora (The One-Family Rule).
- **Do** używać poświaty zamiast szarych cieni; czarny cień tylko pod kartami premium (The Glow-Not-Shadow Rule).
- **Do** kolorować długą prozę na Starlight (`#D8CFF0`), nie na czysto biało ani neonowo (The Long-Text Rule).
- **Do** weryfikować kontrast ≥4.5:1 dla tekstu (≥3:1 dla dużego) — szczególnie tekst akcentowy i `text-soft` na ciemnym tle.
- **Do** dać każdej animacji wariant `@media (prefers-reduced-motion: reduce)`: statyczny glow, linia widoczna bez rysowania, parallax i pulsowanie wyłączone.
- **Do** kontakt wyłącznie przez `mailto:` / `tel:`; widoczny focus state na wszystkim, co interaktywne.

### Don't:
- **Don't** projektować jak zimny startup SaaS — żadnych hero-metryk (wielka liczba + mała etykieta + gradient), identycznych siatek kart, korporacyjnego żargonu.
- **Don't** schodzić w urzędową/biuletynową estetykę instytucji ani w sterylne, kliniczne „AI lab" bez ciepła i wspólnoty.
- **Don't** robić dystopijnego cyberpunku: agresywny chaos neonów, azjatyckie znaki, reklamy, glitch jako stały efekt, klimat gamingowy.
- **Don't** używać **gradient text** (`background-clip: text` na gradiencie) — emfaza tylko przez wagę, rozmiar i kolor jednolity. Akcent na słowie w H1 robimy solidnym neonem, nie gradientem.
- **Don't** powtarzać eyebrow (UPPERCASE, tracked) nad każdą sekcją (The Eyebrow-Discipline Rule).
- **Don't** używać glassmorphism dekoracyjnie — tylko celowo (topbar po scrollu, karty). Nie wszystko jest szkłem.
- **Don't** zagnieżdżać kart w kartach; nie pakować nadmiaru tekstu w jedną kartę.
- **Don't** używać Signal Green jako CTA ani koloru marki — to wyłącznie status.
- **Don't** robić migających przycisków, agresywnego pulsowania, scroll-jackingu ani parallaxu zasłaniającego treść.
- **Don't** przekraczać sufitów display: clamp max ≤ 6rem, letter-spacing ≥ -0.04em. (Obecne Hero `8.5rem` wymaga sprowadzenia do spec.)
