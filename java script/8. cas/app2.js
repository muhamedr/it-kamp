// Ispisati brojeve od 1 do 1 u konzoli jedan ispod drugog:

// 1. nacin
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);


// 2. nacin

// Za iteraciju kroz neki objekat (niz,karaktere stringa...) u JavaScriptu koristimo petlju.
// Postoje 3 petlje u JS

// 1. for petlja
// for (statement1; statement2; statement3) {}
    //  kod koji se izvrsava u svakoj iteraciji

// statement1 - Izvrsava se samo na pocetku i predstavlja definisanje iteratora.
// statement2 - Predstavlja granicu do koje ce izvrsavat ta petlja
// statement3 - Promena vrednosti iteratora koja se desava nakon svake iteracije.
for (let i = 1; i <= 10; i++ ) { 
    console.log(i)
}