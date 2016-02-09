/*
 Znajdź i zapisz do zmiennych następujące elementy:
 1. Element o klasie first -> jego pierwsze dziecko -> jego trzecie dziecko.
 2. Element o id second -> jego rodzic -> jego czwarte dziecko.
 3. Element o atrybucie data-ex nastawionym na wartość third
 -> jego dziadek -> jego ostatnie dziecko -> jego pierwsze dziecko
 -> jego środkowe dziecko (żeby otrzymać środkowy element, podziel ilość dzielci przez 2 i zaokrąglij do góry).
 4. Div o klasie forth -> jego rodzic -> jego pierwsze dziecko o klasie article -> jego drugie dziecko o tagu <p>.
 Wszystkie te elementy mają atrybut data-answer nastawiony na numer zadania, dla którego są odpowiedzią.

 */

document.addEventListener('DOMContentLoaded', function () {

    var zadanie1 = document.querySelector(".first");
    var element1 = zadanie1.firstElementChild.children[2];
    console.log(element1);

    var zadanie2 = document.querySelector("#second");
    var element2 = zadanie2.parentElement.children[3];
    console.log(element2);

    var zadanie3 = document.querySelector("[data-ex='third']");
    var element3tab = zadanie3.parentElement.parentElement.lastElementChild.firstElementChild.firstElementChild.children;
    var element3 = element3tab[Math.ceil(element3tab.length / 2) - 1];
    console.log(element3);

    var zadanie4 = document.querySelector("div.forth");
    var element4step1 = zadanie4.parentElement;
    var element4step2 = element4step1.querySelector("article");
    var element4step3 = element4step2.querySelectorAll("article > p");
    //var element4step3 = element4step
    //var element4 = element4step2.querySelectorAll("p");
    console.log(element4step3[1]);


    /* Metoda pseudopoprawna
    var forth = document.querySelector('div.forth');
    var forthParent = forth.parentElement;
    var firstArticle = forthParent.querySelector('article');
    var counterP=0;
    for (var i = 0; i < firstArticle.children.length; i++) {
        var currChildren = firstArticle.children[i];
        if (currChildren.tagName == 'P') {
            counterP++;

            if (counterP == 2) {

                //w tym momencie w currChildren jest szukany element
                break;
            }
        }
    }
    console.log(currChildren);
    */

});