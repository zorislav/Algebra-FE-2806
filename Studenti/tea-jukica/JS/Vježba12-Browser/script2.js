
//window.navigator

// console.log(navigator.geolocation);

if(navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function (pos){
    console.log(pos);
  });
} else {
  console.log('Browser ne podržava geolokaciju');
}