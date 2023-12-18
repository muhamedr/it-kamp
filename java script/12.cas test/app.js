// 1.
let nekiBr = +prompt("unesite neki broj");
if (isNaN(nekiBr)) {
  console.log("niste uneli broj");
} else {
  console.log(nekiBr ** 2);
}

// 3.

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
