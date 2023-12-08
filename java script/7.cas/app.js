// Za interakciju sa korisnikom koristimo prompt metodu.

const fullName = prompt("Unesite vase ime i prezime");
console.log(fullName);

const age = prompt("Unesite broj godina");
console.log(age);
console.log(typeof age);

// Vrednost dobijena preko prompt metode je uvek tipa string.
// Taj string se moze prevesti u tip number na nekoliko nacina:

// 1. Number(age)
const brojGodina = Number(age);
console.log(brojGodina);
console.log(typeof brojGodina);

// 2. +age
const brojGodina2 = +age;
console.log(brojGodina2);
console.log(typeof brojGodina2);

// const visina = Number (prompt ("Unesite vasu visinu"))
const visina = +prompt("Unesite vasu visinu");
console.log(visina);

// isNaN() je metoda koja proverava da li je neka vrednost nekorektan broj (NaN).
console.log(isNaN("55")); // false
console.log(isNaN("5qwe5")); // true

// Na osnovu unetih godina ispisati u konzoli sledece :
// ako je broj godina manji od 12: Vi ste decijeg doba
// ako je broj izmedju 12(ukljucuje) i 18 (ne ukljucuje): Vi ste maloletni
// ako je broj godina izmedju 18 (ukljucuje) i 40 (Ne ukljucuje) : Vi ste punoletni
// Ako je broj godina veci ili jednak 40 : Vi ste zrela osoba
// Ako je korisnik uneo negativan broj: Broj godina ne moze biti negativan.
// ako korisnik nije uneo broj: Niste uneli broj godina.

// brojGodina = 11

// if (brojGodina <12) {
//     console.log("Vi ste decijeg doba")
// }
// if (brojGodina >=40) {
//     console.log("Vi ste zrela osoba")
// }
// if (brojGodina <0) {
//     console.log("Broj godina ne moze biti negativan")
// } else if (brojGodina NaN) {
//     console.log("Niste uneli broj godina")
// }
