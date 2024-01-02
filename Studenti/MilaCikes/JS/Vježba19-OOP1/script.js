var character = {
  name: "Eleven",
  show: "Stranger Things",
  portrayedBy: "Millie Bobby Brown",
};

const quotes = [
  "I'm going to my friends. I'm going home.",
  "Pure fuel! PURE FUEL! WOO!",
  "See? Zoomer.",
  "Bitchin.",
];

// 1

var proto1 = Object.getPrototypeOf(character);
console.log(proto1);

var proto2 = Object.getPrototypeOf(proto1);
//console.log(proto2);

// 2a

//console.log(Math.floor(Math.random() * quotes.length));

proto1.getQuote = function () {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

console.log(character.getQuote());

// 2b
character._proto_.getQuote2 = function () {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

console.log(character.getQuote2());
