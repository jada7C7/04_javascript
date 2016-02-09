/**
 Na stronie znajduje się guzik. Musisz dopisać do niego event w taki sposób, żeby po kliknięciu w niego
 guzik został usinięty ze strony.
 */


document.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelector(".button");
    button.addEventListener('click', clickButton);

    function clickButton(event) {
        button.parentNode.removeChild(button);
    }

});