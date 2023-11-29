//window.navigator

//console.log(navigator.geolocation);

if(navigator.geolocation) {
navigator.geolocation.getCurrentPosition(function(pos){
  //console.log(pos);
  console.log("Dužina: " + pos.coords.longitude);
  console.log("Dužina: " + pos.coords.latitude);
});
} else {
  console.log("Browser ne podržava geolokaciju");
}