/*
 Napisz funkcję calculateTip(amount, raiting) która będzie pobierać dwa kwotę i opis słowny obsługi.
 Funkcja ma zwracać albo kwotę napiwku, albo napis "Opis nieczytelny". opis może przyjmować następujące wartości:
 "Bardzo dobra obsługa" => 25% napiwku,
 "Dobra obsługa" => 20% napiwku,
 "Średnia obsługa" =>15% napiwku,
 "Zła obsługa" => 0% napiwku.
 */


function calculateTip(amount, raiting) {
    switch (raiting) {
        case "Bardzo dobra obsługa":
            console.log(amount * 0.25);
            break;
        case "Dobra obsługa":
            console.log(amount * 0.20);
            break;
        case "Średnia obsługa":
            console.log(amount * 0.15);
            break;
        case "Zła obsługa":
            console.log(0);
            break;
        default:
            console.log("opis nieczytelny");
    }
}

calculateTip(300, "Bardzo dobra obsługa");