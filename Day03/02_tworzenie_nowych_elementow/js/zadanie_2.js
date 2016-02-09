/*
 Na stronie znajduje się tablica z informacjami na temat zamówień (z dwoma już wprowazonymi zamówieniami).
 Poniżej znajduje się formularz do wypełnienia mowego zamówienia. Napisz event, który pobierze
 informacje z inputów (el.value) i wprowadzi nowy wpis do tabelki.
 */


document.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelector(".button");
    button.addEventListener('click', clickButton);

    var table = document.getElementById("orders");

    function clickButton(event) {
        var orderId = document.getElementById("orderId");
        var item = document.getElementById("item");
        var quantity = document.getElementById("quantity");

        var newTr = document.createElement("tr");

        var newTdId = document.createElement("td");
            newTdId.innerHTML = orderId.value;

        var newTdItem = document.createElement("td")
            newTdItem.innerHTML = item.value;

        var newTdQuantity = document.createElement("td")
            newTdQuantity.innerHTML = quantity.value;

        newTr.appendChild(newTdId);
        newTr.appendChild(newTdItem);
        newTr.appendChild(newTdQuantity);

        table.appendChild(newTr);
    }

});