// 1.

// broj = +prompt("Unesite bilo koji broj");
// if ((broj = Number  )) {

// }
// console.log("Niste uneli broj.")

// 3.
let brojac = 0;
let i = 1;

while (brojac < 3) {
  if (i % 4 === 0 && i % 6 === 0) {
    console.log(i);
    brojac++;
  }
  i++;
}

// 2.

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizz buzz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else {
    console.log(i);
  }
}
