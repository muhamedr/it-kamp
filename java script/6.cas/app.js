// Kondicionali //

// (5 > 4) je uslov koji kada je zadovoljen izvrsice se deo koda izmedju viticastih zagrada
if (4 > 5) {
  console.log("vece je");
}

trenutnoVreme = 20;

if (trenutnoVreme >= 6 && trenutnoVreme < 12) {
  console.log("Dobro jutro");
} else if (trenutnoVreme >= 12 && trenutnoVreme < 17) {
  console.log("Dobar dan");
} else {
  console.log("Dobro vece");
}


brojGodina = 18

if (brojGodina >= 18) {
    console.log("Punoletni ste.")
} else if (brojGodina < 18) {
    console.log("Maloletni ste.")
}


const x = 12;
const y = 6;

if (y == 0) {
  console.log("Deljenje je nemoguce")
} else {
  console.log(x / y)
}   