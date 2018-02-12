// Functions - zestaw instrukcji wykonujacych dane zadanie okreslone w ciele funkcji
// deklaracja
function test /*nazwa poprzez ktora odwołujemy sie fkcji*/ (a, b) /*parametry*/ {
  return a + b // cialo funkcji
}
test(1, 2); // wywołanie

// funkcja jako wyrażenie
const myFunc = function (a, b) {
  return a + b
}

// arrow function 
const myFunction = (a, b) => {
  return a + b}

// funkcje anonimowe - nie maja własnej nazwy np. ... .addEventListener('click', function() {...})

// Objects 

const person = {
  first: 'Julita',
  last: 'Karolczuk',
  open(){console.log('Oks')},
  links: {
      fb: "fbJK",
      twitter: "twitterJK"
  }
};
const {first: firstName, last} = person; // pobranie wartoci z obiektu
const {twitter, fb} = person.links;

const person2 = Object.assign(person); // kopiuje referencje jak zmienie np imie to w person tez sie zmieni

const person3 = Object.assign({}, person); // tworzy nowy obiekt, jesli ulegnie zmianie, pierwotny 'person' nie zmini sie

//zmiana wartosci obiektu
person["last"] = 'Blabla';
person.first = "Hyhy";

//tworzenie

const key = 'first';
const value = 'Ala';

const person4 = {
    [key]: value
};

// Object.keys(obj) --> zwraca array z kluczami
// Object.values(obj) --> zwraca array z wartosciami obiektu
// Objects.entries(obj) --> zwraca arraya z tablicami klucz,wartosc


//  == (równy) 	Zwraca true jeżeli operandy są równe. Jeżeli operandy nie są tego samego typu,
//               JavaScript próbuje przekształcić operandy na odpowiedni dla porównania typ. np. 3=='3' v true == 1
// === (identyczny) Zwraca true jeżeli operandy są równe i tego samego typu. 3===3 -> true v 3=='3' -> false
// != (różne) Zwraca true jeżeli operandy są różne
// !== (nieidentyczne) Zwraca true jeżeli operandy nie są równe i/lub nie są tego samego typu.
// Większy niż (>) || Większy - równy (>=) || Mniejszy niż (<) || Mniejszy - równy (<=)

//loops

// for(let i=0; i < x.lenght; i++){}

//while (warunek) {}

// do {...} while (warunek);

// for ( x in y ){} --> indeksy tablicy

//for (x of y){} --> wartosci tablicy

// !true -> false

//THIS - odnosi sie do obiektu/ w funkcjach strzałkowych odnosi sie do otaczającego konteksu
// Gdy funkcja jest wywoływana jako metoda obiektu, this jest ona ustawiana na obiekt, do którego wywołana jest metoda.


//CLOSURES -- funkcja wewnetrzna, mająca dostep do zmiennych globalnych, zewnetrznej funkcji i swoich lokalnych
//Hoisting -- jest domyslnym zachowaniem JS, przesuwania deklaracji na górę. Zmienne moga byc deklarowane po uzyciu
q = 5;
var q;

//VALUES

//JavaScript jest zawsze przekazywany poprzez wartości, ale gdy zmienna odnosi się do obiektu (w tym tablic), 
//jest ona odniesieniem do obiektu(array)

var x = 10;
var y = 'abc';
var a = x;
var b = y;
a = 5;
b = 'def';
console.log(x, y, a, b);

//REFERENCES
var obj = { first: 'reference' };
obj = { second: 'ref2' }

//async functions zwraca Promise, gdy wyjatek to Promise zostaje odrzucona .catch() - błedy, w przeciwnym razie zwraca wartosc .then()-zwraca dane otrzymane z API
//np. 
fetch('https://xxxxxx')
.then(resp => {
    console.log('Odpowiedź:');
})
.catch(error => console.log('Błąd: ', error));

//REGEX - wyrażenia regularne
// i - pomija wielkosc liter
// g - global scope
// m - dopasowanie wielowierszowe
// [0-9] - w przedziale [^0-9]-  nie w przedziale
// n+ - co najmniej jedno n
// n* - zero lub więcej
// n? - zero lub jedno
// n$ - n na koncu
// ^n - n na poczatku 
// \s - bialy znak \S - nie 
// \d - cyferka \D - nie cyferka
//np:
var re = /(\w+)\s(\w+)/; //var re = new RegExp('ab+c'); "JKKK K".match(re)

//NOT DEFINED - zmienna nie istnieje i nie jest zadeklarowana
//UNDEFINED - zadeklarowana zmienna bez wartosci