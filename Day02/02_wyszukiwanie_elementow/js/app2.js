/*
 Wyszukaj na stronie i zapisz do odpowiednio nazwanych zmiennych nastepujące elementy:
 1. Wszystkie elementy li, które znajdują się w tagu nav,
 2. Wszystkie paragrafy należące do wszystkich elementów div,
 3. Wszystkie divy znajdujące się w tagu article,
 Pamiętaj, żeby za każdym razem sprawdzić, czy wczytałeś odpowiednie elementy.
 Pamiętaj, żeby używać funkcji, które wyszukują wiele elementów. Za każdym razem wypisz w konsoli, ile jest
 znalezionych przez ciebie elementów.
 */

document.addEventListener("DOMContentLoaded", function () {


    var allLi = document.getElementsByTagName("nav");
    console.log(allLi);
    console.log(allLi.length);

    var allPfromDiv = document.querySelectorAll("div p"); // wszystkie p z divów
    console.log(allPfromDiv);
    console.log(allPfromDiv.length);

    var allDivFromArticle = document.querySelectorAll("article div"); //wszystkie divy z article
    console.log(allDivFromArticle);
    console.log(allDivFromArticle.length);

});