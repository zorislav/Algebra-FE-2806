// window.navigator

console.log(navigator.geolocation);

if(navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(pos){
    console.log(pos);
    console.log( "Duzina " + pos.coords.longitude);
    console.log("Sirina " + pos.coords.latitude)
  });
} else {
  console.log ("Browser ne podrzava geolokaciju");
}

