// window.navigator
console.log(navigator.geolocation);

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function (pos) {
    console.log(pos);
    console.log("Sirina = " + pos.coords.latitude);
    console.log("Duzina = " + pos.coords.longitude);
  });
} else {
  console.log("Browser ne podrzava geolokaciju");
}
