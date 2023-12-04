//1. geolocation API

console.log(window.navigator.geolocation); //ovo daje prazan objekt!!!

if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(pozicija){
        //console.log(pos);
        console.log('Dužina: ' + pozicija.coords.longitude);
        console.log('Širina: ' + pozicija.coords.latitude);
        //zapravo smo s ova dva samo pristupili svojstvima objekta geolocation
    })
}else {
    console.log('Brovser ne podržava geolokaciju');
};
//s ovim zapravo ispitujemo podržava li brovser funkciju geolokacije
//s obzirom da nam ovo daje prazan objekt koje je true, tako ga provjeravamo



//1.//stvaranje novog elementa da bude dijete starog, korak, po korak

//let ivan = document.querySelector('#iko'); 
//let iskra = document.createElement('br');
//ivan.appendChild(iskra);

//2.
//stvaranje novog elementa da bude dijete starog, sve zajedno
document.querySelector('#iko').appendChild(document.createElement('br'));

//3. za micanje novostvorenog ili nekog drugog elementa

document.querySelector('br').parentNode.removeChild(document.querySelector('br'));
//pristupili smo elememntu, otišli k njegovom roditelju(parentnode)
//išli na remove child i u metodu ubacili njega!!!