const getx = () => Math.random() <= 0.5;

const prom = new Promise((resolve, reject) => {
  const x = getX();

  if (x) {
    return setTimeout(() => resolve(x), 1000);
  }
  return setTimeout(reject, 1000);
});

prom
  .then((value) => console.log("Yay! ${value}"))
  .catch(() => console.log("Oh,no!"));
