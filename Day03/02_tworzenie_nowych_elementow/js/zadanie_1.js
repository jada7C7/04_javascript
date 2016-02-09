/*
 Na stronie przypisanej do zadania znajduje się lista i guzik. Musisz dopisać odpowiednie eventy do nich w taki
 sposób, żeby po kliknięciu w guzik dodał się nowy element do listy. Element powinien mieć w sobie
 informacje na temat tego, ile elementów jest w liście w chwili jego dodania.
 */


document.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelector("a");
    button.addEventListener('click', clickButton);
    var menu = document.querySelector(".menu");

    function clickButton(event) {
        var counter = menu.children.length;
        var newLi = document.createElement("Li");
        newLi.innerHTML = "Element " + (counter + 1) + " - w chwili dodania było " + counter + " elementów";
        menu.appendChild(newLi)
    }
});