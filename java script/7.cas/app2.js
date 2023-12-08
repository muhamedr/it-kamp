// Na osnovu unetih godina ispisati u konzoli sledece :
// ako je broj godina manji od 12: Vi ste decijeg doba
// ako je broj izmedju 12(ukljucuje) i 18 (ne ukljucuje): Vi ste maloletni
// ako je broj godina izmedju 18 (ukljucuje) i 40 (Ne ukljucuje) : Vi ste punoletni
// Ako je broj godina veci ili jednak 40 : Vi ste zrela osoba
// Ako je korisnik uneo negativan broj: Broj godina ne moze biti negativan.
// ako korisnik nije uneo broj: Niste uneli broj godina.

const brojGodina = prompt("Unesite broj godina");
console.log(brojGodina);
console.log(typeof brojGodina);

if (brojGodina < 12) {
    console.log("Vi ste decijeg doba")
} else if (brojGodina > 40 ) {
    console.log("Vi ste zrela osoba")
} else if (brojGodina < 0) {
    console.log("Broj godina ne moze biti negativan")
} else if (brojGodina > 12 && brojGodina < 18) {
    console.log("Vi ste maloletni")
} else if (brojGodina => 18 && brojGodina > 40) {
    console.log("Vi ste punoletni")
}  else if (isNaN(brojGodina)) {
    console.log("Niste uneli broj godina")
}