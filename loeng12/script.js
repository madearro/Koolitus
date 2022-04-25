let nimeElement = document.getElementById('name');
let mailiElement = document.getElementById('email');
let textarea = document.getElementById('sonum');
let saada = document.getElementById('saada');
let andmed = [nimeElement.value, mailiElement.value, textarea.value];

saada.addEventListener("click", function () {
    if (nimeElement.length == 0 || mailiElement.length == 0 || textarea.value == '') {
      document.getElementById("teade").innerHTML = alert("Palun täida kõik väljad")
    } else {
      document.getElementById("teade").innerHTML = alert("Sõnum saadetud!")
      console.log(Andmed);
      nimeElement.value = '';
      mailiElement.value = '';
      textarea.value = '';
    }
  });


/*if (nimeElement.length == 0 || mailiElement.length == 0 || textarea.value == '') {
    saada.addEventListener("click", function () {
        document.getElementById("teade").innerHTML = alert("Palun täida kõik väljad")
    });
}

else {
    saada.addEventListener("click", function () {
        document.getElementById("teade").innerHTML = alert("Sõnum saadetud!")
    })
    console.log(Andmed);
    nimeElement.value = '';
    mailiElement.value = '';
    textarea.value = '';
}


/*  let inputs = document.querySelectorAll(nimeElement.value, mailiElement.value, textarea.value);
inputs.forEach(input => {
  input.value = '';
}); */






