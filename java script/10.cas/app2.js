// Korisnik unosi 2 broja:
// Na osnovu toga koji je broj manji,iteracija se vrsi od njega do veceg broja.
// Ispisuju se brojevi od manjeg ka vecem.

// const a = +prompt("Unesite prvi broj")
// const b = +prompt("Unesite drugi broj")
// for (let i = a; i <= b; i++) {
//     console.log(i)
// }

// Preko switch naredbe:
// console.log(new Date().getDay());
//  getDay() - daje vrednost 0 - 6
//  switch (new Date().getDay())....
//  Na osnovu vrednosti koju nam daje izraz iz switch naredbe, kroz case-ove i eventualno default ispisati poruku:
// "Danas je 'radni dan' "
// "Ugodno provedite vikend"
switch (new Date().getDay()) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Danas je 'radni dan'");
    break;
  // case 6:
  // case 0:
  default:
    console.log("Ugodno provedite vikend");
    break;
}

// Sabrati brojeve od 1 do 10 i ispisati taj zbir
let zbir = 0

for (let i = 1; i <= 10; i++) {
zbir += i;
}
console.log(zbir)          

//  Prebrojati i sabrati brojeve deljive sa 5 u intervalu od 1 do n

const n = +prompt("Unesite neku vrednost.")
let saberi = 0;     
let brBr = 0;
for (i = 1; i < n; i++) {
if(i % 5 === 0){
    saberi += i;
    brBr += 1;
}
}
console.log(brBr)
console.log(saberi);