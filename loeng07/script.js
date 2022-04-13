let kasutajaNimi = "";

while (kasutajaNimi == "" || kasutajaNimi == null) {
kasutajaNimi = prompt("Palun sisesta oma nimi");
}

if (kasutajaNimi.length <= 5)  {
    tervitus = "<h1> Küll sul on ilus lühike nimi! </h1>";
  } else { 
      tervitus = "<h2> <b> Küll sul on suurepärane pikk nimi! </b> </h2>"
  }

  document.getElementById("tervitus").innerHTML = tervitus