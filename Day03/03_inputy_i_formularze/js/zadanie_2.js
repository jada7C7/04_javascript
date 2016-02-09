/*
 Na stronie znajduje się formularz do zamówienia pizzy. W formularzu znajduje się pole z checkboxami,
 w którym użytkownik może wybrać sobie dodatki. Cena każdego z dodatków jest trzymana w atrybucie data-price.
 Napisz takie eventy, żeby po zaznaczeniu checkoxa wyświetlała się poprawna kwota zamówienia oraz po wysłaniu
 formularza wyświetlił się alert z wyliczoną kwotą. Zwróć uwagę na dwa specjalne checkboxy: none - powinien odznaczyć
 wszystkie inne opcje, a all - powinien zaznaczyć wszystkie inne opcje (poza none).
 */


/*document.addEventListener('DOMContentLoaded', function () {

    var elementPrice = document.getElementById("price");
    console.log(elementPrice);
    var price = 0;

    var buttony = document.querySelectorAll("input");
    console.log(buttony);

    for(var i = 0; i < buttony.length; i++){
        buttony[i].dataset.id = buttony[i].dataset.price;
        //buttony[i].dataset.price = 0;
    }
    console.log(buttony);

    buttony.addEventListener('click', clickbutton);







    function clickbutton(event) {
        for (var i = 0; i < buttony.length; i++) {
            if (buttony[i].dataset.price > 0) {
                price += buttony[i].dataset.price;

            }
        }


    }




    for(var i = 0; i < buttony.length; i++){
        if(buttony[i].dataset.price >0){
            var x = parseInt(buttony[i].dataset.price);
        price += x;
        }
    }

    elementPrice.innerHTML = price + "zł";

    console.log(buttony);
    console.log(price);


});*/


document.addEventListener('DOMContentLoaded', function () {

    var checkboxes = document.querySelectorAll('[type=checkbox]');
    var sum = document.getElementById('price');
    for (var a = 0; a < checkboxes.length; a++) {
        checkboxes[a].addEventListener('click', function () {
            //sprawdzam czy checkbox jest normalnym z ceną
            if (this.hasAttribute('data-price')) {
                //jest z ceną wiec sprawdzam czy zaznaczony aby dodac lub odjąć od sumy
                //pobieram cenę
                var checkedPrice = decimals(parseFloat(this.dataset.price));
                var suma = decimals(parseFloat(sum.innerHTML));
                if (this.checked) {
                    //dodaje do sumy
                    suma += checkedPrice;
                } else {
                    //odejmuje od sumy
                    suma -= checkedPrice;
                }

                //aktualizuje sume
                sum.innerHTML = decimals(suma).toFixed(2) + 'zł';
            }
        });
    }

    var checkboxesSpecial = document.querySelectorAll('input:not([data-price])');
    //takie checkboxy są 2 na stronie
    checkboxesSpecial[0].addEventListener('click', function () {//checkbox 1 zaznacz all
        this.checked = false;//oznaczam go jako nie zaznaczony aby nie byl na zmiane zaznaczony i odznaczony
        //klikniety pierwszy wiec zaznaczam wszystkie checkboxy które mają cenę
        for (var a = 0; a < checkboxes.length; a++) {
            //sprawdzam czy checkbox jest normalnym z ceną
            if (checkboxes[a].checked == false && checkboxes[a].hasAttribute('data-price')) {
                checkboxes[a].click();//symuluje klik
            }
        }
    });
    checkboxesSpecial[1].addEventListener('click', function () {//checkbox 2 wyczysc all
        this.checked = false;//oznaczam go jako nie zaznaczony aby nie byl na zmiane zaznaczony i odznaczony
        //klikniety pierwszy wiec zaznaczam wszystkie checkboxy które mają cenę
        for (var a = 0; a < checkboxes.length; a++) {
            //sprawdzam czy checkbox jest normalnym z ceną
            if (checkboxes[a].checked && checkboxes[a].hasAttribute('data-price')) {
                checkboxes[a].click();
            }
        }
    });

    var btn = document.querySelector('button');
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        alert(document.getElementById('price').innerHTML);
    });
});

function decimals(number) {
    //return Number(Math.round(number+'e2')+'e-2');
    return Math.round(number * 100) / 100;
}