# JavaScript – DOM Text Animation

## Hjemmeopgave

I denne hjemmeopgave arbejder du videre med **JavaScript DOM, events og conditionals**.

Du skal arbejde med et tekst-element og en knap, hvor et klik på knappen ændrer tekstens størrelse og samtidig ændrer knappens tekst.

Du arbejder selvstændigt med projektet og følger kommentarerne i filerne trin for trin.

---

# Fremgangsmåde – sådan kommer du i gang med projektet

I denne hjemmeopgave skal du bruge **GitHub Template-metoden**.

Du skal derfor **ikke downloade projektet som ZIP og ikke bruge Fork**.

Følg denne rækkefølge:

```text
GitHub Template
↓
Dit eget repository på GitHub.com
↓
GitHub Desktop
↓
Visual Studio Code
↓
Arbejd med hjemmeopgaven
↓
Commit
↓
Push
```

> Følg punkterne **ét ad gangen og i den viste rækkefølge**.

---

## 1. Opret dit eget repository på GitHub.com

Åbn det udleverede **template-repository** på GitHub.com.

Du skal være logget ind på din egen GitHub-konto.

Klik på:

**Use this template**

Vælg derefter:

**Create a new repository**

Vælg din egen GitHub-konto som ejer, og brug det repository-navn, som din underviser har angivet.

Klik derefter på:

**Create repository**

Vent et øjeblik, mens GitHub opretter dit nye repository.

### Kontrollér, at du er i dit eget repository

Når repositoryet er oprettet, skal du kontrollere navnet øverst på siden.

Det skal være **dit eget GitHub-brugernavn**, der står foran repositoryets navn.

Det kan fx se sådan ud:

```text
dit-brugernavn/js-dom-text-animation
```

> **Stop her og kontrollér dette, før du går videre.**

---

## 2. Hent dit repository ned på din computer

Nu ligger projektet på **GitHub.com**, men du skal også have det ned på din egen computer.

Åbn **GitHub Desktop**.

Vælg:

**File → Clone repository...**

Vælg fanebladet **GitHub.com**, og find det repository, du netop har oprettet.

Hvis repositoryet ikke vises, kan du i stedet vælge fanebladet **URL** og indsætte adressen til dit repository fra GitHub.com.

### Vælg, hvor projektet skal gemmes

I feltet **Local path** vælger du, hvor projektet skal ligge på din computer.

> **Local path** betyder den mappe på din computer, hvor projektets filer bliver gemt.

Klik derefter på:

**Clone**

Vent, mens GitHub Desktop henter projektet ned på din computer.

---

## 3. Åbn projektet i Visual Studio Code

Når projektet er klonet, vælg:

**Open in Visual Studio Code**

Du skal arbejde direkte i den projektmappe, som GitHub Desktop har klonet.

Kontrollér, at projektet har denne struktur:

```text
js-dom-text-animation/
│
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── README.md
```

---

# Hjemmeopgaven

Du skal arbejde med disse filer:

- `index.html`
- `js/script.js`

Læs kommentarerne i koden grundigt, inden du begynder at skrive din løsning.

---

## 4. Forbind JavaScript-filen med HTML-filen

Åbn:

```text
index.html
```

I filen finder du denne kommentar:

```html
<!-- Link til js/script.js herunder -->
```

Din første opgave er at forbinde JavaScript-filen med HTML-dokumentet.

JavaScript-filen ligger i mappen:

```text
js/
```

og hedder:

```text
script.js
```

> **Vær opmærksom på filstien:** `script.js` ligger ikke i samme mappe som `index.html`, men i undermappen `js`.

Skriv selv det korrekte `<script>`-element på det angivne sted.

Gem derefter filen.

---

## 5. Åbn `js/script.js`

Start med at skrive:

```js
"use strict";
```

I filen er tekst-elementet allerede hentet fra DOM'en:

```js
const getWordElem = document.getElementById("word");
```

Det betyder, at JavaScript nu har adgang til HTML-elementet med `id="word"`.

---

## 6. Hent knappen fra DOM'en

I `index.html` findes knappen:

```html
<button type="button" id="zoomBtn">Zoom ind</button>
```

Din opgave er at hente knappen i `script.js` med:

```text
document.getElementById()
```

Variablen skal hedde:

```js
getZoomBtn
```

> Brug eksemplet med `getWordElem` som inspiration, men skriv selv koden.

---

## 7. Arbejd med klik-eventet

I `script.js` er event listener-strukturen allerede startet:

```js
getZoomBtn.addEventListener("click", function() {

    // Din kode skal skrives her

});
```

Når brugeren klikker på knappen, skal koden inde i den anonyme function køre.

Du skal selv skrive en `if/else`-struktur inde i event listeneren.

---

## 8. Zoom teksten ind og ud

Din `if/else`-struktur skal undersøge knappens tekst ved hjælp af:

```js
this.textContent
```

Hvis knappens tekst er:

```text
Zoom ind
```

skal du:

- ændre tekstens `fontSize` til `6rem`
- ændre knappens tekst til `Zoom ud`

Ellers skal du:

- ændre tekstens `fontSize` til `3rem`
- ændre knappens tekst tilbage til `Zoom ind`

Du ændrer tekstens størrelse gennem JavaScript med:

```text
getWordElem.style.fontSize
```

> Her ændrer du en CSS-egenskab direkte via JavaScript.

---

## 9. Test løsningen i browseren

Åbn `index.html` med **Live Server**.

Klik på knappen flere gange og kontrollér:

- at teksten bliver større, når der står **Zoom ind**
- at knappens tekst skifter til **Zoom ud**
- at teksten bliver mindre igen ved næste klik
- at knappens tekst skifter tilbage til **Zoom ind**

Hvis noget ikke virker:

1. Åbn browserens Developer Tools.
2. Gå til **Console** og læs eventuelle fejlmeddelelser.
3. Kontrollér, at `getZoomBtn` er skrevet korrekt.
4. Kontrollér din `if/else`-struktur.
5. Kontrollér brugen af `this.textContent`.
6. Kontrollér brugen af `getWordElem.style.fontSize`.
7. Gem filerne og test igen.

---

## 10. Arbejd progressivt med commits

Du skal ikke vente med at committe, til hele hjemmeopgaven er færdig.

Lav commits løbende, når du har afsluttet en tydelig del af arbejdet.

Du kan eksempelvis lave commits efter:

```text
Forbundet JavaScript med index.html
```

```text
Tilføjet use strict
```

```text
Hentet zoom-knappen fra DOM'en
```

```text
Tilføjet if else til zoom-knappen
```

```text
Testet tekst-animationen
```

Skriv selv korte og meningsfulde commit-beskeder, der beskriver, hvad du har ændret.

> Formålet er, at din Git-historik viser, hvordan du har arbejdet med hjemmeopgaven trin for trin.

---

## 11. Push til GitHub.com

Når du har lavet et commit i GitHub Desktop, skal du huske at klikke på:

**Push origin**

På den måde bliver dine ændringer sendt fra din computer til dit repository på GitHub.com.

Gå gerne ind på GitHub.com bagefter og kontrollér, at dine seneste commits kan ses.

---

# Når hjemmeopgaven er færdig

Kontrollér følgende:

- [ ] Jeg har oprettet mit eget repository med **Use this template**
- [ ] Jeg arbejder i mit eget repository
- [ ] Jeg har klonet projektet med GitHub Desktop
- [ ] Projektet er åbnet i Visual Studio Code
- [ ] `js/script.js` er forbundet korrekt med `index.html`
- [ ] Jeg har skrevet `"use strict";`
- [ ] Jeg har hentet knappen `zoomBtn` fra DOM'en
- [ ] Variablen til knappen hedder `getZoomBtn`
- [ ] Jeg har arbejdet med `addEventListener()`
- [ ] Jeg har skrevet en `if/else`-struktur
- [ ] Jeg har arbejdet med `this.textContent`
- [ ] Jeg har ændret `fontSize` via JavaScript
- [ ] Knappens tekst skifter mellem `Zoom ind` og `Zoom ud`
- [ ] Jeg har testet løsningen i browseren
- [ ] Jeg har lavet løbende commits
- [ ] Jeg har pushet mine commits til GitHub.com

> **Husk:** Formålet er både at træne **JavaScript DOM, events, conditionals og ændring af CSS via JavaScript** og at øve workflowet mellem **GitHub.com → GitHub Desktop → Visual Studio Code → Commit → Push**.
