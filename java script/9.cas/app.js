// Napisati program koji na osnovu dva uneta broja od strane korisnika ispisuje:
//  Povrsinu kvadrata ako su uneti brojevi jednaki,
// Povrsinu pravougaonika ako su uneti brojevi razliciti

const a = Number(prompt("Unesite prvi broj"));
const b = Number(prompt("Unesite drugi broj"));

if (a === b) {
  console.log("Povrsina kvadrata je " + a * b);
} else {
  console.log("Povrsina pravougaonika je " + a * b);
}

// Kalkulator opercija:
// Napisi program koji ce traziti od korisnika da unese dva broja i operaciju (), a zatim ispisati rezultat te operacije.

const operacija = +prompt("Unesite aritmeticku operaciju");
switch (operacija) {
  case "+":
    console.log(a + b);
    break;
    console.log(a - b);
    break;
    console.log(a * b);
    break;
    case "/":
    if (b === 0) {
        console.log("Deljenje nije moguce nulom.")
    } else {
        console.log(a / b)
    }
    console.log(a / b);
    break;
    default:
        console.log("Nepoznata aritmeticka operacija")
}
