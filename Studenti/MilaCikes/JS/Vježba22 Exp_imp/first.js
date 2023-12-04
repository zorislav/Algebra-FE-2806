function nekaFunkcija() {}

var module1 = {
  x: 1,
  y: function () {
    console.log("Hello!");
  },
  z: nekaFunkcija,
};

export var niz = [1, 2, 3, 4];

var tekst = "Ovo je primjer za default export";
export default tekst;
