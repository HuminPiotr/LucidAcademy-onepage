Design System (tzw. "Single Source of Truth"), którego musisz rygorystycznie przestrzegać przy pisaniu pliku style.css.

1. ZMIENNE CSS (GLOBALNE):

Na samej górze pliku CSS wpisz poniższe zmienne w formacie :root. Wszędzie w kodzie CSS musisz odwoływać się wyłącznie do nich (np. var(--bg-dark)), absolutnie nie używaj kodów HEX bezpośrednio w klasach!

Pamiętaj o uwzględnieniu zmiennej `--nav-height` niezbędnej do poprawnego działania kotwic!

```css
:root {
  --bg-dark: #0A0A10;          /* Główne, bardzo ciemne tło (void) */
  --bg-card: rgba(21, 21, 32, 0.65); /* Półprzezroczyste tło dla kart (Glassmorphism) */
  --text-main: #E0E0E0;        /* Jasnoszary tekst główny dla świetnego czytania */
  --text-heading: #FFFFFF;     /* Czysta biel dla głównych nagłówków */
  --accent-purple: #6B21A8;    /* Ciemny fiolet (bazowe cienie, głębia) */
  --accent-neon: #D946EF;      /* Neonowy fiolet (przyciski CTA, podświetlenia) */
  --accent-cyan: #00F0FF;      /* Elektryczny błękit/cyjan (przełamanie, akcenty, gradienty) */
  --nav-height: 80px;          /* Wysokość nawigacji do korygowania scrolla */
}

Przełączamy się w tryb Art Directora. Oto nasz Design System (tzw. "Single Source of Truth"), którego musisz rygorystycznie przestrzegać przy pisaniu pliku style.css.

1. ZMIENNE CSS (GLOBALNE):
Na samej górze pliku CSS wpisz poniższe zmienne w formacie :root. Wszędzie w kodzie CSS musisz odwoływać się wyłącznie do nich (np. var(--bg-dark)), absolutnie nie używaj kodów HEX bezpośrednio w klasach!
:root {
  --bg-dark: #0A0A10;          /* Główne, bardzo ciemne tło */
  --bg-card: #151520;          /* Tło dla ewentualnych pudełek/kart */
  --text-main: #E0E0E0;        /* Jasnoszary tekst główny dla świetnego czytania */
  --text-heading: #FFFFFF;     /* Białe nagłówki */
  --accent-purple: #6B21A8;    /* Ciemny fiolet (akcenty, cienie) */
  --accent-neon: #D946EF;      /* Neonowy fiolet (przyciski CTA, podświetlenia) */
}

2. TYPOGRAFIA (ROZMIARY I FONT):
- Font dla całości to `font-family: 'Sora', sans-serif;`.
- Pamiętaj o zwiększonym line-height dla tekstu ciągłego (min. 1.6) dla polepszenia czytelności.
- RWD Typografii: Używaj jednostek `rem` i zadbaj by na mobile nagłówek <h1> nie był zbyt wielki (niech schodzi np. z 3.5rem na desktopie do 2rem na mobile).

3. WYGLĄD KOMPONENTÓW ZBAZOWANY NA BRANDINGU ("CYBER/SIECI"):
- PRZYCISKI: Mają być minimalistyczne, ale drapieżne. Ramka 1px o kolorze `--accent-neon`, przezroczyste tło. Na :hover tło wypełnia się lekko półprzezroczystym kolorem `--accent-purple`, a cały przycisk delikatnie "świeci" z użyciem box-shadow (tzw. neon glow).
- KARTY/SEKCJE: Żadnych mocnych, ostrych białych obwódek. Używaj bardzo subtelnego obramowania brzegów (`border: 1px solid rgba(217, 70, 239, 0.1)`) i zaokrągleń max `border-radius: 8px;`.
- TŁO HERO: Tło pod sekcją hero ma być super czyste (sam `--bg-dark`). Motywy "obwodów mózgu" dodamy jako delikatne `background-image` (wzór/SVG z przezroczystością na poziomie 5-10%), aby tekst <h1> absolutnie nie stracił na czytelności.

4. ZASADY ANIMACJI I MIKROINTERAKCJI (EFEKT "WOW" W VANILLA CSS):
Twoim celem jest wygenerowanie nowoczesnego, zachwycającego doświadczenia (High-End Tech Vibe) WYLĄCZNIE przy użyciu czystego CSS i wytycznych poniżej. Nie używaj żadnych bibliotek.

- Intersection Observer (Scroll Animation): Wszystkie główne elementy sekcji (nagłówki H2, karty z ofertą) muszą startować z klasą `.fade-up` (ukryte, lekko przesunięte w dół). W script.js napisz Intersection Observer o nazwie 'revealObserver', który dodaje klasę `.visible` płynnie je odsłaniając, gdy wchodzą w viewport. Czas trwania przejścia to 0.6s.
- Glassmorphism: "Sticky Nav" przypięty do góry musi używać techniki matowego szkła (np. background: rgba(10, 10, 16, 0.7); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(255,255,255,0.05);).
- Hover Effects: Każda interaktywna karta (np. w sekcji #co-robimy lub #zespol) oraz przycisk po najechaniu musi "reagować". Karta ma podnosić się o kilka pikseli do góry (transform: translateY(-4px)) i wzmacniać fioletowy box-shadow. Całość przejścia (transition) musi mieć gładką interpolację (ease-in-out).
- Unikaj "przeładowania": Animacje mają być płynne, premium i eleganckie, a nie agresywne jak w reklamach z lat 00'. Używaj właściwości bezpiecznych dla wydajności (transform i opacity - hardware acceleration).
```
