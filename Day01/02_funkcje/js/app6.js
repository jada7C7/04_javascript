/*
 Napisz funkcję rockPaperScissors(player1, player2) która będzie pobierać dwa napisy i zwracać infromacje kto wygrał.
 Poprawne napisy przyjmowane przez funkcjię to: papier, nożyce, kamień.
 Funkcja ma zwracać jeden z 4 napisów: "Gracz 1 wygrał", "Gracz 2 wygrał" "Remis", "Błędne informacje"
 */


function rockPaperScissors(player1, player2) {

    switch (player1) {
        case "papier":
            switch (player2) {
                case "papier":
                    console.log("Remis");
                    break;
                case "kamien":
                    console.log("Gracz 1 wygral");
                    break;
                case "nozyce":
                    console.log("Gracz 2 wygral");
                    break
                default:
                    console.log("Bledne informacje");
            }
            break;
        case "kamien":
            switch (player2) {
                case "kamien":
                    console.log("Remis");
                    break;
                case "nozyce":
                    console.log("Gracz 1 wygral");
                    break;
                case "papier":
                    console.log("Gracz 2 wygral");
                    break
                default:
                    console.log("Bledne informacje");
            }
            break;
        case "nozyce":
            switch (player2) {
                case "nozyce":
                    console.log("Remis");
                    break;
                case "papier":
                    console.log("Gracz 1 wygral");
                    break;
                case "kamien":
                    console.log("Gracz 2 wygral");
                    break
                default:
                    console.log("Bledne informacje");
            }
            break;
        default:
            console.log("Bledne informacje");
    }
}

rockPaperScissors("papier", "nozyce");