/*
 Na stronie są 3 obrazki z ikonami najpopularniejszych przeglądarek internetowych. Niestety zarówno obrazki,
 jak i linki prowadzące do ich stron zawierają błędy. Napisz kod JavaScript, który:
 1. Poprawi elementy tak, żeby do każdej przeglądarki było podpięte odpowiednie logo (obrazek jest nastawiany
 za pomocą background-image).
 2. Poprawi linki tak, żeby każdy miał poprawny opis i atrybut href.
 3. Poprawi szerokość elementu o klasie chrome (powinno być 100px).
 Podejrzyj w konsoli, jak wygląda kod CSS dopisany przez JavaScript.
 Zastanów się, dlaczego dopisywany jest w tym miejscu. Napisz odpowiedź na to pytanie w komentarzu do zadania.
 */

document.addEventListener("DOMContentLoaded", function () {

    var divEdge = document.querySelector("div.edge");
    var divFirefox = document.querySelector("div.firefox");

    console.log(divEdge);
    divEdge.classList.remove("edge");
    divEdge.classList.add("firefox");

    console.log(divFirefox);
    divFirefox.classList.remove("firefox");
    divFirefox.classList.add("edge");


    var divChromeLink = document.querySelector(".chrome+a");
    console.log(divChromeLink);
    divChromeLink.innerHTML = "Chrome";

    var divEdgeLink = document.querySelector(".edge+a");
    console.log(divEdgeLink);
    divEdgeLink.innerHTML = "Firefox";
    divEdgeLink.setAttribute('href', "https://www.mozilla.org/pl/firefox/new/");
    divEdgeLink.setAttribute('target', "_blank");

    var divFirefoxLink = document.querySelector(".firefox+a");
    console.log(divFirefoxLink);
    divFirefoxLink.setAttribute('href', "https://www.microsoft.com/en-us/windows/microsoft-edge#htqV0qO3jMO9bXHs.97");
    divFirefoxLink.setAttribute('target', "_blank");


    var divChrome = document.querySelector("div.chrome");
    divChrome.setAttribute("style", "width: 100px")
    divChrome.setAttribute('target', "_blank");
    console.log(divChrome);

});