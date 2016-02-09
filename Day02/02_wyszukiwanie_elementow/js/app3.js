/*
 Wyszukaj na stronie i zapisz do odpowiednio nazwanej zmiennej tag article o klasie first. Następnie:
 1. Wypisz w konsoli, ile elementów h1 znajduje się w tym tagu.
 2. Wyszukaj w nim wszystkie elementy o klasie oferts. Przeiteruj je i wypisz nazwy ich tagów w konsoli.
 3. Wyszukaj w nim wszystkie elementy div. Przeiteruj je i wypisz nazwy ich klas w konsoli.
 Pamiętaj, żeby za każdym razem sprawdzić, czy wczytałeś odpowiednie elementy. Pamiętaj, żeby używać funkcji,
 które wyszukują wiele elementów. Za każdym razem wypisz w konsoli, ile jest znalezionych przez ciebie elementów.
 */


document.addEventListener("DOMContentLoaded", function () {


    var elementArticleFromFirst = document.querySelector("article.first");

    var elementsH1 = elementArticleFromFirst.querySelectorAll("h1");
    var elementsH1Length= elementsH1.length;
    console.log(elementsH1Length);

    var elementsOfers = elementArticleFromFirst.querySelectorAll(".oferts");
    console.log(elementsOfers.length);
    for (var i = 0 ; i < elementsOfers.length; i++){
        console.log(elementsOfers[i].tagName);
    }

    var elementsDiv = elementArticleFromFirst.querySelectorAll("div");
    console.log(elementsDiv.length);
    for (var i = 0 ; i < elementsDiv.length; i++){
        console.log(elementsDiv[i].className);
    }


});