// ispisati parne brojeve od 1 do 20 na dva nacina.

//  1. nacin
for (let i = 1; i < 21; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}


// 2 nacin

for (let i = 2; i < 21; i += 2) {
    console.log(i);
}

// ispisati dvostruku vrednost prirodnih brojeva od 6 do 14

for(let i = 6; i < 15; i) {
    const doubleValue = i * 2;
    console.log(doubleValue);
}