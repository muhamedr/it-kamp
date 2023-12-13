// Domaci:
// 1.
// Ispisati neparne brojeve od 1 do 20 na dva nacina.
// 2.
// Ispisati parne brojeve od 1 do 20 na dva nacina.
// 3.
// Ispisati dvostruku vrednost prirodnih brojeva od 6 do 14.
// 4.
// Ispisati sve brojeve od 50 do 100 koji su deljivi sa 5.

// 1.1
for (let broj = 1; broj <= 20; broj += 2) {
  console.log(broj);
}

// 2.1

for (let broj = 2; broj <= 20; broj += 2) {
  console.log(broj);
}

// 3.1

for (let broj = 6; broj <= 14; broj++) {
  let dvostruko = broj * 2;
  console.log(`Dvostruka vrednost broja ${broj} je ${dvostruko}`);
}

// 4

for (let broj = 50; broj <= 100; broj++) {
  if (broj % 5 === 0) {
    console.log(broj);
  }
}
