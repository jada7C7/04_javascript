/**
 Na stonie znajduje się guzik. Podepnij do niego event, który na kliknięcie spowoduje, że w konsoli wyświelti się
 napis "Hura! Działa!". Pamiętaj, żeby wszystko pisać w evencie DOMContentLoaded.
 */


document.addEventListener('DOMContentLoaded', function(){

    var klik = document.getElementById("mainBtn");
    console.log(klik);

    function klikHurra (event){
        console.log("Hura! Działa!")
    }

    klik.addEventListener('click', klikHurra);
});
