/*
 Stwórz tyle zmiennych ile różnych znasz typów. Każdą odpowiednio nazwij i wstaw do nich odpowiednie dane.
 Następnie dodaj do siebie różne zmienne i zobacz jakiego typu jest wynik. Napisz w komentarzu przy każdej zmiennej jej typ.
 Wypisz każdą zmienną w konsoli.
 Zwróć uwagę jak zmieniają się typy danych w zależności od tego jakie typy ze sobą dodajemy.
 Jest to tak zwane niejawna konwersja dancyh (silnik JavaScript bez naszego udziału zmienia typ danych).
 */

var numer = 1;
console.log(numer);

var tekst = 'przyladowy tekst';
console.log(tekst);

var przecinkowa = 12.4;
console.log(przecinkowa);

var logiczny = true;
console.log(logiczny);

var pusty = null;
console.log(pusty);

var niezdefiniowana;
console.log(niezdefiniowana);


console.log(numer + tekst);
console.log(numer + przecinkowa);
console.log(niezdefiniowana + tekst);
console.log(logiczny + tekst);
console.log(niezdefiniowana + pusty);





