/**
 Na stronie znajdują się 3 guziki i 3 liczniki (elementy span o klasie counter).
 Do każdego guzika dopisz event, który spowoduje, że przypisany do niego licznik zwiększy swoją wartość o 1 po
 klinknięciu w guzik. Pamiętaj, żeby wszystko pisać w evencie DOMContentLoaded.
 */


document.addEventListener('DOMContentLoaded', function () {




    var button1 = document.getElementById("button1");
    console.log(button1);
    var counter1 = document.querySelector("#button1+p span");

    var button2 = document.getElementById("button2");
    console.log(button2);
    var counter2 = document.querySelector("#button2+p span");

    var button3 = document.getElementById("button3");
    console.log(button3);
    var counter3 = document.querySelector("#button3+p span");

    function clickButton1(event) {
        var curval = parseInt(counter1.innerHTML);
        counter1.innerHTML = curval + 1;
    }

    function clickButton2(event) {
        var curval = parseInt(counter2.innerHTML);
        counter2.innerHTML = curval + 1;
    }

    function clickButton3(event) {
        var curval = parseInt(counter3.innerHTML);
        counter3.innerHTML = curval + 1;
    }

    button1.addEventListener('click', clickButton1);
    button2.addEventListener('click', clickButton2);
    button3.addEventListener('click', clickButton3);

});
