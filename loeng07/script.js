let kasutajaNimi = "";

while (kasutajaNimi == "" || kasutajaNimi == null) {
kasutajaNimi = prompt("Palun sisesta oma nimi");
}

if (kasutajaNimi.length <= 5)  {
    tervitus = '<h1 style="color: red"> Küll sul on ilus lühike nimi! </h1><img src="smiling.png">'
  } else { 
      tervitus = '<h2 style="color: blue"> <b> Küll sul on suurepärane pikk nimi! </b> </h2><img src="../loeng04/dog.jpg">'
  }

  document.getElementById("tervitus").innerHTML = tervitus
  

  
 