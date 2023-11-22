//window.navigator

console.log(navigator.geolocation);

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function (pos) {
    //console.log(pos);
    console.log("duzina" + pos.coords.latitude);
    console.log("duzina" + pos.coords.longitude);
  });
} else {
  console.log("ne podrzava geolokaciju");
}
