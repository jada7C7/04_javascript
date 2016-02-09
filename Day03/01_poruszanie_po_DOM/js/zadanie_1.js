/*
 W pliku znajduje się kilka przycisków (są to odpowiednio postylowane linki). Po klinknięciu w którykolwiek z
 nich element, który znajduje się bezpośrednio po nim, powinien zniknąć (jeżeli był widoczny) lub się pojawić
 (jeżeli był niewidoczny). Rozwiązanie musi spełniać następujące założenia:
 1. Na wszystkie przyciski musi być założony ten sam event.
 2. Następny element ma być wyszukiwany zależnie od położenia this.
 3. Kod musi działać poprawnie i nie generować błędów (pamiętaj o sprawdzeniu, czy następny element nie równa się null).
 */


document.addEventListener('DOMContentLoaded', function () {
    var elementsAllA = document.querySelectorAll("a");
    for (var i = 0; i < elementsAllA.length; i++) {
        elementsAllA[i].addEventListener('click', clickButton);
    }
    function clickButton(event) {
        var braciak = this.nextElementSibling; // this odnosi się do elementu który wywołał event
        if (braciak.style.visibility == "hidden") {
            braciak.style.visibility = "visible";
        } else {
            braciak.style.visibility = "hidden";
        }
    }
});