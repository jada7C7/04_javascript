/*
 Napisz funkcję rentCost(days) która będzie pobierać liczbę dni jako argument a następnie pnie wyliczać koszt
 wynajmu pokoju według podanego wzoru:
 Wynajem trwa 1 dzień - koszt pokoju 200zł/dzień
 Wynajem trwa 2-3 dni - koszt pokoju 180zł/dzień
 Wynajem trwa 4-7 dni - koszt pokoju 160zł/dzień
 Wynajem trwa 8+ dni - koszt pokoju 150zł/dzień.
 Dodatkowo za każdy pełny tydzień przysługuje 50zł zniżki.
 */

function rentCost(days) {
    if (days == 1) {
        return days * 200
    } else if (days <= 3) {
        return days * 180
    } else if (days <= 7) {
        var topay = days * 160;
        if (days = 7) {
            return topay -= 50;
        } else {
            return topay;
        }
        return days * 160;
    } else {
        var topay = days * 150;
        topay -= parseInt(days / 7) * 50;
        return topay;
    }
}

console.log(rentCost(8));