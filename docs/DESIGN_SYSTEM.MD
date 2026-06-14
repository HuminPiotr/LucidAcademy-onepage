# DESIGN-GUIDE — Lucid Academy

Opisuje jak strona Lucid Academy ma wyglądać i zachowywać się wizualnie. Ten dokument jest źródłem prawdy dla zespołu agentów, designerów i developerów. Każdy komponent, sekcja i animacja powinny wynikać z tych zasad.

Strona ma być wizytówką fundacji Lucid Academy: organizacji łączącej edukację o AI, kulturę, wspólnotę, technologię i projekty społeczne.

---

## 1. Filozofia wizualna

**3 słowa:** Światło · Wspólnota · Precyzja

### Rozwinięcie

Lucid Academy nie jest zwykłą stroną technologiczną ani cyberpunkową dekoracją. To opowieść o tym, jak z niepewności wobec AI wyłania się zrozumienie, a ze zrozumienia powstaje sieć ludzi, instytucji, edukacji i projektów.

Strona ma sprawiać wrażenie:

- nowoczesnej,
- inteligentnej,
- spokojnej,
- świetlistej,
- technologicznej, ale ludzkiej,
- efektownej, ale czytelnej,
- fundacyjnej, ale premium.

**Czego nie projektujemy:**

- Nie projektujemy zimnego startupu SaaS.
- Nie projektujemy dystopijnego cyberpunku.
- Nie projektujemy akademickiej strony z urzędową estetyką.

**Co projektujemy:** ciemną, fioletową, świetlistą przestrzeń przyszłości, w której AI zostaje oswojone przez edukację, kulturę i wspólnotę.

---

## 2. Główne wartości wizualne

### Świadomość

AI nie jest przedstawiane jako magia ani zagrożenie. Jest tematem wymagającym refleksji, języka, edukacji i odpowiedzialności.

Wizualnie oznacza to:

- światło wyłaniające się z ciemności,
- spokojne animacje,
- czytelną hierarchię,
- brak chaosu,
- brak agresywnych efektów.

### Wspólnota

Lucid Academy łączy ludzi, instytucje, studentów, nauczycieli, liderów lokalnych, NGO i samorządy.

Wizualnie oznacza to:

- linie,
- punkty,
- sieci,
- połączenia,
- konstelacje,
- ścieżki prowadzące przez stronę.

### Edukacja

Strona ma tłumaczyć i prowadzić. Użytkownik nie może czuć się zagubiony.

Wizualnie oznacza to:

- krótkie bloki tekstu,
- jasne nagłówki,
- mocne CTA,
- karty z czytelnymi tematami,
- stopniowe odkrywanie treści.

---

## 3. Kierunek artystyczny

### Styl bazowy

Dark neon sci-fi / elegancka futurystyczna metropolia / lucid cyber-aesthetic

Inspiracją są obecne grafiki fundacji:

- ciemne futurystyczne miasto,
- fioletowo-granatowa atmosfera,
- neonowe akcenty magenta i cyan,
- mokre powierzchnie odbijające światło,
- motyw neuronów,
- motyw obwodów,
- świecące linie,
- logo w fioletowej poświacie.

### Ważne doprecyzowanie

Nie idziemy w kierunku europejskiego/Toruńskiego miasta. Hero ma bazować na klimacie grafik fundacji: ciemna futurystyczna metropolia.

Może być delikatnie cyberpunkowo, ale:

- mniej azjatyckich znaków,
- mniej reklam,
- mniej chaosu,
- mniej dystopii,
- więcej elegancji,
- więcej przestrzeni,
- więcej światła jako metafory zrozumienia.

### Zakazane skojarzenia

Unikamy:

- agresywnego cyberpunkowego chaosu,
- dystopii,
- horroru,
- wojny technologicznej,
- nadmiaru neonowych reklam,
- japońskich/chińskich/koreańskich znaków,
- przypadkowych napisów typu „DATA", „AI CLUB" jako głównych elementów,
- stylu gamingowego,
- stylu korporacyjnego consulting/SaaS,
- zbyt zimnej, laboratoryjnej estetyki.

---

## 4. Motyw przewodni strony

### Linia, która staje się siecią

Centralnym motywem strony jest **świetlista linia**.

Narracja wizualna:

- W Hero widzimy ciemne futurystyczne miasto.
- Na horyzoncie pojawia się wschodzące fioletowo-cyjanowe światło.
- Ze światła wychodzi cienka świetlista linia.
- Linia prowadzi użytkownika przez stronę.
- W kolejnych sekcjach linia rozgałęzia się w sieć: edukacji, ludzi, instytucji, projektów, wspólnoty.
- W sekcji kontaktu linia kończy się jako zaproszenie do rozmowy.

To nie jest tylko dekoracja. To główna metafora Lucid Academy: zrozumienie AI zaczyna się od jednego impulsu, a kończy się siecią realnych działań.

---

## 5. Hero — zasady wizualne

Hero jest najważniejszą sceną strony.

### Układ

- **Tło:** ciemne futurystyczne miasto.
- **Tekst:** po lewej stronie.
- **Miasto:** cała szerokość, przyklejone do dołu.
- **Horyzont:** w centrum perspektywy miasta.
- **Światło:** pojawia się na horyzoncie.
- **Linia:** wychodzi ze światła i schodzi dalej w stronę kolejnych sekcji.

### Hero powinno mieć

- ciemne tło,
- wyraźny, ale subtelny glow,
- warstwowy efekt głębi,
- płynne zmiany przy scrollu,
- czytelny tekst,
- spokojny efekt premium.

### Hero nie powinno mieć

- zbyt jasnego tła za tekstem,
- nadmiaru znaków i reklam,
- losowych napisów,
- ciężkich animacji zasłaniających treść,
- efektów migania,
- zbyt szybkich pulsacji,
- zbyt wielu punktów/cząsteczek.

---

## 6. Paleta kolorów

Kolory wynikają z obecnych grafik Lucid Academy.

### Powierzchnie / tła

```css
--bg-0: #07040F;
--bg-1: #0B0716;
--bg-2: #13072D;
--bg-3: #1E1142;
--bg-4: #2A1A57;
--navy: #08091E;
```

| Zmienna | Zastosowanie |
| --- | --- |
| `--bg-0` | Najciemniejsze tło, główna baza strony, hero startowe. |
| `--bg-1` | Tło sekcji, alternatywa dla bg-0. |
| `--bg-2` | Głębszy fiolet dla kart, większych bloków i przejść. |
| `--bg-3` | Akcentowe powierzchnie, tła sekcji, hover states. |
| `--bg-4` | Mocniejsze fioletowe tło dla wybranych kart lub aktywnych elementów. |
| `--navy` | Granatowa głębia, używana do cieni, topbara, gradientów. |

### Fiolety bazowe

```css
--lilac: #B088F4;
--violet: #7C4DDB;
--violet-deep: #4C26AD;
--neon-pink: #D85CC8;
```

| Zmienna | Zastosowanie |
| --- | --- |
| `--lilac` | Nagłówki pomocnicze, świetliste linie, subtelne akcenty. |
| `--violet` | Główne przyciski, aktywne elementy, poświaty, ikony. |
| `--violet-deep` | Głębia kart, gradienty, tła wewnętrzne. |
| `--neon-pink` | Akcent emocjonalny, podkreślenia, wybrane nody sieci. |

### Kolory rozjaśniające / energetyczne

```css
--hot-pink: #FF4BF2;
--cyan: #4BFFFF;
--green: #7AFF84;
```

| Zmienna | Zastosowanie |
| --- | --- |
| `--hot-pink` | Używać bardzo oszczędnie. Dobre dla najmocniejszych akcentów, np. hover CTA, ważny punkt sieci. |
| `--cyan` | Technologia, dane, linie, glow, aktywne punkty, połączenia. |
| `--green` | Statusy pozytywne: „działa", „aktywny", „wdrożone", „w realizacji". Nie używać jako głównego koloru marki. |

### Kolory tekstu

```css
--text-primary: #F7F2FF;
--text-secondary: #D8CFF0;
--text-muted: #AFA3CC;
--text-soft: #82769F;
--text-on-accent: #FFFFFF;
```

| Zmienna | Zastosowanie |
| --- | --- |
| `--text-primary` | Główne nagłówki, najważniejsze treści. |
| `--text-secondary` | Lead, akapity, opisy. |
| `--text-muted` | Meta informacje, etykiety, podpisy. |
| `--text-soft` | Nieaktywne linki, pomocnicze dane. |

### Linie / bordery

```css
--border-soft: rgba(176, 136, 244, 0.18);
--border-medium: rgba(176, 136, 244, 0.32);
--border-cyan: rgba(75, 255, 255, 0.28);
--border-pink: rgba(255, 75, 242, 0.24);
```

### Przykładowe gradienty

**Główne tło strony**

```css
background:
  radial-gradient(circle at 70% 20%, rgba(124, 77, 219, 0.18), transparent 34%),
  radial-gradient(circle at 20% 80%, rgba(75, 255, 255, 0.08), transparent 30%),
  linear-gradient(180deg, #07040F 0%, #0B0716 42%, #13072D 100%);
```

**Lucid glow**

```css
background:
  radial-gradient(
    circle,
    rgba(176, 136, 244, 0.68) 0%,
    rgba(124, 77, 219, 0.38) 28%,
    rgba(75, 255, 255, 0.18) 46%,
    transparent 70%
  );
```

**CTA gradient**

```css
background:
  linear-gradient(135deg, #7C4DDB 0%, #D85CC8 55%, #FF4BF2 100%);
```

---

## 7. Typografia

### Font główny

**Sora** jest podstawową czcionką dla całej strony. Używamy jej do:

- nagłówków,
- nawigacji,
- przycisków,
- kart,
- leadów,
- treści.

Fallback:

```css
font-family: "Sora", "Inter", "Manrope", system-ui, sans-serif;
```

**Dlaczego Sora?** Sora jest nowoczesna, technologiczna, geometryczna, ale nadal czytelna. Pasuje do estetyki AI/fundacji bez wchodzenia w zbyt korporacyjny styl.

### Hierarchia typograficzna

**H1**

```css
font-size: clamp(3rem, 7vw, 6.8rem);
line-height: 0.95;
font-weight: 700;
letter-spacing: -0.06em;
```

Zastosowanie:

- tylko Hero,
- maksymalnie jeden H1 na stronie,
- może mieć gradientowy akcent na jednym słowie.

Przykład: *Oswajamy AI dla instytucji, edukacji i wspólnot.*

**H2**

```css
font-size: clamp(2.2rem, 4.5vw, 4.6rem);
line-height: 1.02;
font-weight: 700;
letter-spacing: -0.05em;
```

Zastosowanie: główne nagłówki sekcji.

**H3**

```css
font-size: clamp(1.35rem, 2vw, 2rem);
line-height: 1.15;
font-weight: 650;
letter-spacing: -0.035em;
```

Zastosowanie: karty oferty, bloki projektów, podsekcje.

**Lead**

```css
font-size: clamp(1.05rem, 1.35vw, 1.35rem);
line-height: 1.65;
font-weight: 400;
letter-spacing: -0.015em;
```

Zastosowanie: leady pod nagłówkami, tekst Hero, wprowadzenia do sekcji.

**Body**

```css
font-size: 1rem;
line-height: 1.7;
font-weight: 400;
letter-spacing: -0.01em;
```

**Small / meta / eyebrow**

```css
font-size: 0.78rem;
line-height: 1.2;
font-weight: 650;
letter-spacing: 0.12em;
text-transform: uppercase;
```

Eyebrow zawsze może mieć kolor `--lilac`, `--cyan` albo gradient.

Przykład: `FUNDACJA LUCID ACADEMY`

---

## 8. Zasady typografii

### Nie łamiemy

- Nie używamy wielu różnych fontów.
- Nie używamy przypadkowych fontów dekoracyjnych.
- Nie używamy zbyt cienkich fontów na ciemnym tle.
- Nie ustawiamy długich akapitów na pełną szerokość ekranu.
- Nie robimy tekstu w neonowych kolorach na długich fragmentach.

### Szerokość tekstu

```css
/* Długie teksty */
max-width: 680px;

/* Leady */
max-width: 760px;

/* Hero lead */
max-width: 640px;
```

### Kolor tekstu

Długie teksty nie mogą być czysto białe na czarnym tle, jeśli nie są nagłówkiem. Preferowane:

```css
color: var(--text-secondary);
```

---

## 9. Przestrzeń i layout

**Ogólna zasada:** Strona ma oddychać. Lepiej mniej elementów na ekranie niż więcej.

### Container

```css
--container-max: 1180px;
--container-wide: 1360px;
--page-padding: clamp(1.25rem, 4vw, 4rem);

.container {
  width: min(100% - var(--page-padding) * 2, var(--container-max));
  margin-inline: auto;
}
```

### Sekcje

```css
padding-block: clamp(5rem, 10vw, 10rem);

/* Hero */
min-height: 100vh;

/* Hero ze scrollytellingiem */
min-height: 120vh;
```

### Grid

Domyślny układ desktopowy:

```css
display: grid;
grid-template-columns: 0.9fr 1.1fr;
gap: clamp(2rem, 5vw, 6rem);
```

### Odstępy

Skala spacingu:

```css
--space-1: 0.25rem;
--space-2: 0.5rem;
--space-3: 0.75rem;
--space-4: 1rem;
--space-5: 1.5rem;
--space-6: 2rem;
--space-7: 3rem;
--space-8: 4rem;
--space-9: 6rem;
--space-10: 8rem;
```

---

## 10. Zaokrąglenia

Styl ma być nowoczesny i miękki, ale nie „cukierkowy".

```css
--radius-xs: 0.5rem;
--radius-sm: 0.75rem;
--radius-md: 1rem;
--radius-lg: 1.5rem;
--radius-xl: 2rem;
--radius-pill: 999px;
```

### Zastosowanie

| Element | Radius |
| --- | --- |
| Małe etykiety | `var(--radius-pill)` |
| Przyciski | `var(--radius-sm)` |
| Karty | `var(--radius-lg)` |
| Duże bloki / panele | `var(--radius-xl)` |

---

## 11. Cienie i glow

Cienie na tej stronie nie powinny wyglądać jak klasyczny material design. Używamy raczej poświat niż zwykłych cieni.

**Glow fioletowy**

```css
--glow-violet:
  0 0 24px rgba(124, 77, 219, 0.38),
  0 0 64px rgba(124, 77, 219, 0.18);
```

**Glow cyjanowy**

```css
--glow-cyan:
  0 0 22px rgba(75, 255, 255, 0.28),
  0 0 72px rgba(75, 255, 255, 0.12);
```

**Glow różowy**

```css
--glow-pink:
  0 0 24px rgba(255, 75, 242, 0.32),
  0 0 72px rgba(255, 75, 242, 0.14);
```

**Karta premium**

```css
box-shadow:
  0 24px 80px rgba(0, 0, 0, 0.38),
  inset 0 1px 0 rgba(255, 255, 255, 0.06);
```

**Zasada:** Glow używamy punktowo. Nie każdy element świeci. Jeśli wszystko świeci, nic nie świeci.

---

## 12. Karty i powierzchnie

### Domyślna karta

```css
.card {
  background:
    linear-gradient(180deg, rgba(255,255,255,0.055), rgba(255,255,255,0.025)),
    rgba(19, 7, 45, 0.72);
  border: 1px solid rgba(176, 136, 244, 0.18);
  border-radius: 1.5rem;
  backdrop-filter: blur(18px);
  box-shadow:
    0 24px 80px rgba(0, 0, 0, 0.32),
    inset 0 1px 0 rgba(255, 255, 255, 0.06);
}
```

### Hover karty (desktop)

```css
.card:hover {
  transform: translateY(-4px);
  border-color: rgba(176, 136, 244, 0.36);
  box-shadow:
    0 28px 90px rgba(0, 0, 0, 0.42),
    0 0 40px rgba(124, 77, 219, 0.12);
}
```

### Zasady kart

- Karty mają być czytelne.
- Nie umieszczamy w jednej karcie zbyt dużo tekstu.
- Karta powinna mieć wyraźny nagłówek, krótki opis i opcjonalną etykietę.
- Ikona w karcie powinna być w kolorowym kwadracie.

---

## 13. Przyciski

### CTA główne

```css
.btn-primary {
  background: linear-gradient(135deg, #7C4DDB 0%, #D85CC8 60%, #FF4BF2 100%);
  color: #FFFFFF;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 0.85rem;
  box-shadow:
    0 0 28px rgba(124, 77, 219, 0.34),
    0 12px 36px rgba(0, 0, 0, 0.32);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow:
    0 0 36px rgba(255, 75, 242, 0.36),
    0 16px 42px rgba(0, 0, 0, 0.4);
}
```

### CTA drugie

```css
.btn-secondary {
  background: rgba(255, 255, 255, 0.045);
  color: var(--text-primary);
  border: 1px solid rgba(176, 136, 244, 0.28);
  border-radius: 0.85rem;
  backdrop-filter: blur(14px);
}
```

### Zasady przycisków

- Na jednej sekcji maksymalnie jedno CTA główne.
- Drugie CTA powinno być wizualnie spokojniejsze.
- Nie używać zielonego jako głównego CTA.
- Nie robić migających przycisków.
- Przyciski muszą mieć widoczny focus state.

---

## 14. Ikony

### Źródło ikon

Preferowane:

- Google Material Symbols,
- Lucide Icons,
- Phosphor Icons.

Nie mieszamy wielu stylów ikon w jednym widoku.

### Styl ikon

Ikony powinny być:

- liniowe,
- proste,
- geometryczne,
- czytelne w małym rozmiarze.

### Ikony w kartach

Zawsze w kolorowym kwadracie lub zaokrąglonym kontenerze.

```css
.icon-box {
  width: 3.25rem;
  height: 3.25rem;
  border-radius: 1rem;
  display: grid;
  place-items: center;
  background:
    linear-gradient(135deg, rgba(124,77,219,0.9), rgba(216,92,200,0.7));
  box-shadow: 0 0 28px rgba(124, 77, 219, 0.26);
}
```

### Kolory ikon

| Temat | Kolory |
| --- | --- |
| edukacja | violet/lilac |
| technologia | cyan/violet |
| wspólnota | pink/violet |
| status aktywny | green |
| partycypacja | lilac/pink |

---

## 15. Animacje

### Filozofia animacji

Animacje mają opowiadać historię. Nie są ozdobnikiem. Powinny być:

- płynne,
- powolne,
- miękkie,
- eleganckie,
- oszczędne,
- podporządkowane treści.

### Główne typy animacji

**1. Scroll reveal** — elementy pojawiają się przy scrollu:

```text
opacity:    0 → 1
translateY: 24px → 0
czas:       600–900 ms
easing:     cubic-bezier(0.22, 1, 0.36, 1)
```

**2. Glow rise** — światło na horyzoncie Hero rośnie wraz ze scrollem:

```text
scale:   0.7 → 1.4
opacity: 0.25 → 0.9
```

**3. Line draw** — główna linia SVG rysuje się przez:

```css
stroke-dasharray
stroke-dashoffset
```

**4. Nodes pulse** — punkty sieci pulsują delikatnie:

```text
scale:   1 → 1.15 → 1
opacity: 0.65 → 1 → 0.65
```

Nie szybciej niż 2–3 sekundy na cykl.

**5. Parallax** — warstwy Hero mogą przesuwać się subtelnie:

- miasto: do -30px,
- mgła: do 20px,
- glow: lekkie powiększenie,
- tło: delikatna zmiana gradientu.

### Zakazane animacje

- szybkie miganie,
- agresywne pulsowanie,
- glitch jako stały efekt,
- zbyt mocny parallax,
- animacje utrudniające czytanie,
- scroll-jacking blokujący użytkownika,
- efekty wymagające dużej mocy na mobile.

---

## 16. Dostępność animacji

Obowiązkowo wspieramy:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

Dla użytkowników z ograniczonym ruchem:

- Hero pokazuje statyczny glow,
- linia może być widoczna bez rysowania,
- parallax wyłączony,
- pulsowanie nodów wyłączone.

---

## 17. Topbar / nawigacja

### Styl

Topbar ma być **sticky**.

Na początku Hero:

- przezroczysty,
- subtelny,
- zintegrowany z tłem.

Po scrollu:

- glassmorphism,
- ciemny fioletowy blur,
- cienki border,
- delikatny glow.

```css
.topbar.scrolled {
  background: rgba(7, 4, 15, 0.72);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid rgba(176, 136, 244, 0.16);
}
```

### Nawigacja

Linki:

- Misja
- Uniwersytet
- Oferta
- Projekty
- Zespół
- Kontakt

CTA w topbarze: **Porozmawiajmy**

### Zasady

- Topbar nie może dominować nad Hero.
- Linki muszą być czytelne.
- Aktualna sekcja może być podkreślona kolorem `--lilac` albo cienką linią.
- Na mobile używamy prostego menu, bez ciężkich animacji.
