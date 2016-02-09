Zadanie 1
Co to propagacja eventów? Jakie znasz typy propagacji? Czym się od siebie różnią?
__________________

    * Propagacja polega na wywoływaniu eventów w górę drzewa DOM - metoda event bubbling
    * Metoda capturing w dół drzewa - przestarzała
__________________






Zadanie 2
Wytłumacz dlaczego ważne jest żeby cały kod javaScript operujący na naszej stronie
powinniśmy używać w następującym bloku kodu:
document.addEventListener('DOMContentLoaded', function () {
... js code goes here...
}
Do czego może prowadzić sytuacja w której tego nie zrobimy?
__________________

    * DOMContentLoaded znaczy tyle że skrypt ma zaczekać na załadowanie się całego drzewa DOM. Gdybyśmy odwołali się
    do skryptu na końcu dokumentu to nie musielibyśmy tego robić gdyż drzewo byłoby już załadowane.
    Wszystkie załączniki do dokumentu z reguły dołączamy na jego początu więc z tego powodu musimy zastosować powyższą funkcję.
    * Jeżeli tego nie zrobimy to skrypt zacznie pracować zanim będzie miał na czym pracować - wiec nie osiągniemy zamierzonego efektu
__________________






Zadanie 3
Używając czystego JavaScriptu znajdź:
1. Wszystkie elementy o klasie „sample_class”,
2. Element o id „sample_id”,
3. Wszystkie elementy listy znajdujące się w divie o klasie „sample_class_2”,
4. Wszystkie linki.
__________________

    var sampleClass = document.querySelectorAll(".sample_class");
    var sampleID = document.getElementById("sample_id");
    var sampleClass2 = document.querySelectorAll("div.sample_class_2");
    var elementAllLinks = document.querySelectorAll("a");
__________________





Zadanie 4
Stwórz klasę User w JavaScript która:
1. Będzie miała konstruktor przyjmujący nazwę, mail i opis,
2. Miała funkcję (dodaną poprzez prototyp) welcomeUser, która wyświetli w konsoli
przywitanie,
Stwórz obiekt tej klasy i dopisz do niego dodatkową metodę sayGoodbye. Metoda ta
powinna wypisać pożegnanie w konsoli.
__________________

    var User = function (name, mail, description) {
        this.name = name;
        this.mail = mail;
        this.description = description;
    };
    User.prototype.welcomeUser = function(){
        console.log('Hallo '+this.name);
    }
    var newUser = new User('Arek', 'mail@mail.pl', 'przykladowy opis');
    User.prototype.sayGoodbye = function(){
        console.log('bye '+this.name);
    }
    newUser.sayGoodbye()
__________________







Zadanie 5
Napisz kod (używając JavaScript lub jQuery) który do wszystkich elementów o klasie
„click_me” podepnie eventy.
Jeden event ma reagować na najechanie myszką na element i dodawać mu klasę
„mouseOn”.
Drugi event ma reagować na zjechanie myszką z elementu i zabierać mu tą klasę.
__________________

    $(".click_me").hover(
        function () {
        $(this).addClass('mouseOn');
        },
        function () {
        $(this).removeClass('mouseOn');
        }
    );
__________________







Zadanie 6
Napisz kod (używając JavaScript lub jQuery) który do elementu o id „sample_id” podepnie
event. Event ma reagować na kliknięcie myszką, i zmieniać kolor tła wszystkich dzieci
klikniętego elementu na zielony. Event ma zadziałać tylko raz!
__________________

    $("#sample_id").one('click', function () {
        $(this).children.css('background-color', 'green');
    });

__________________