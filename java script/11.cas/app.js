// while petlja se koristi za iteraciju kroz neki objekat.
// definise se drugacije u odnosu na for petlju.

// vreme = "Suncano"
// while (vreme === "Suncano") {
//     console.log("Danas je lep dan.")
//     vreme = "Kisovito";
// }

let i = 1;
while (i < 6) {
  console.log(i);
  //  Kad zavrsimo celu logiku za kod pod odredjenim uslovom moramo menjati i.
  i++;
}

// do while petlja se koristi za iteraciju kroz neki objekat.
// Razlika u odnosu na while petlju je sto se prvo izvrsava kod pa tek onda provera uslov.

let j = 1;

do {
  console.log(j);
  j++;
} while (j < 6);

// nedostatak:
let z = 10;
do {
  console.log(z);
  z++;
} while (z < 6);

// While
// Traziti od korisnika da unese neki broj.
// Na osnovu te vrednosti izvrsiti ispis kvadrata brojeva od 1 do tog unetog broja:

const k = +prompt("Unesite neki broj");
b = 1;
while (b < k) {
  console.log(b);
  b++;
} 

// Traziti unos brojeva od korisnika sve dok ne unese nulu:

