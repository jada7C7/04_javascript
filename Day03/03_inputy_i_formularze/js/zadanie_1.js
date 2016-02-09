/*
 Na stronie znajduje się formularz do zamówienia. Znajduje się w nim sekcja odpowiedzialna za wystawienie faktury.
 Napisz kod JavaScript, który spowoduje, że sekcja ta jest widoczna tylko i wyłącznie wtedy, kiedy zaznaczony jest
 checkbox "Chcę otrzymać fakturę".
 */


document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.getElementById("invoice");
    checkbox.addEventListener('click', clickButton);
    var form = document.getElementById("invoiceData");
    form.style.display = "none";


    function clickButton(event) {
        if (form.style.display == "none") {
            form.style.display = "";
        } else {
            form.style.display = "none"
        }

    }

});

