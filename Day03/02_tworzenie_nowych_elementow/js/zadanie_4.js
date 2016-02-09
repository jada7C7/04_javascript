/*
 Na stronie znajduje się lista z wpisami i guzik. Napisz taki event, żeby po kliknieciu w guzik z listy
 zostały ununięte wszystkie jej dzieci.
 */


document.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelector(".button");
    button.addEventListener('click', clickButton);
    var elementUl = document.querySelector(".list");

    function clickButton(event) {
        for (var i = 0 ; i < elementUl.children.length ; i++){
            console.log(elementUl.children[i]);
            elementUl.children[i].parentNode.removeChild(elementUl.children[i]);
        }
    }

});