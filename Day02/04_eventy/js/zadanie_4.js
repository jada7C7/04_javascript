/*
 Na stronie znajdują się 3 guziki i jeden licznik. Napisz jeden wspólny event dla wszystkich guzików,
 który spowoduje, że licznik zwiększy wartość o 1 po klinknięciu w guzik. Pamiętaj, żeby wszystko pisać w
 evencie DOMContentLoaded.
 */



document.addEventListener('DOMContentLoaded', function () {

    var body = document.querySelector("body");

    var counter = document.querySelector("span");
    console.log(counter);

    function clickButton(event) {
        if(event.target.tagName == "BUTTON") {
        var curval = parseInt(counter.innerHTML);
        counter.innerHTML = curval + 1;}
    }

    body.addEventListener('click', clickButton);

});
