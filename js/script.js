"use strict"
// Husk fra dag 2: skriv "use strict" herunder


// Eksempel: vi henter ordet "word" ved hjælp af dets id-attribut
const getWordElem = document.getElementById("word");

// Skriv selv: hent knappen "zoomBtn" på samme måde, ved hjælp af dens id. Variablen skal hedde getZoomBtn
let getZoomBtn = document.getElementById("zoomBtn");

// Eksempel: vi lytter efter klik på knappen og kører en anonym function, når der klikkes - ligesom i billedskift-opgaven
getZoomBtn.addEventListener("click", function() {

    // Skriv if/else-strukturen selv herinde, ligesom i billedskift-opgaven.
    //
    // Nyt i dag: getWordElem.style.fontSize ændrer en CSS-egenskab (fontSize) direkte via JavaScript,
    // på samme måde som getImage.src ændrede et billede i billedskift-opgaven.
    //
    if (this.textContent === "Zoom ind") {
        getWordElem.style.fontSize = "6rem";
        this.textContent = "Zoom Ud";
    } 
    else {
        getWordElem.style.fontSize = "3rem";
        this.textContent = "Zoom Ind";
    }
    // Hvis this.textContent er "Zoom ind", så:
    //   - sæt getWordElem.style.fontSize til "6rem"
    //   - sæt this.textContent til "Zoom ud"
    // Ellers:
    //   - sæt getWordElem.style.fontSize til "3rem"
    //   - sæt this.textContent til "Zoom ind"

});
