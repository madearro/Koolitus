let Kast1 = {
    pilt: './assets/birds.jpg',
    pealkiri: 'Linnukaamerad',
    tekst: 'Ka sel kevadel saab huviline vaadata linnukaameratest seda, kuidas meile juba tuttavad sulelised pesa ehitavad',
    link: 'Loe edasi'
};
let Kast2 = {
    pilt: './assets/kotkas.jpg',
    pealkiri: 'Merikotka kaamera',
    tekst: 'Neile, kel huvi merikotka kaamera kohta lähemalt lugeda soovitame klikkida alloleval lingil',
    link: 'Loe edasi'
};
let Kast3 = {
    pilt: './assets/surikaat.jpg',
    pealkiri: '33 armsaimat loomakaamerat',
    tekst: 'Loomad on imelised. Kliki alloleval lingil, kui soovid näha live kaameraid loomaaedadest üle maailma.',
    link: 'Loe edasi'
}

let Kastid = [Kast1, Kast2, Kast3];
let sisuHTMLElement = document.getElementById('sisu');

for (let i=0; i<Kastid.length; i++) {
    sisuHTMLElement.innerHTML +='<div><img src="'+ Kastid[i].pilt +'" width="70" height="50"><div>'+ '<h3>' + Kastid[i].pealkiri + '</h3>'+'</div></div>'+
    '<p>'+ Kastid[i].tekst +'</p>'+
     '<div>'+ Kastid[i].link + '</div>'+ '<br>';
}





