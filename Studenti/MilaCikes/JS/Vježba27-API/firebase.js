const inputE1 = document.getElementById("input");
const ulE1 = document.getElementById("lista");
const posaljiButton1 = document.getElementById("posalji");
const procitajButtonE1 = document.getElementById("procitaj");

async function getData() {
  const response = await fetch(
    "https://algebra-fe-default-rtdb.europe-west1.firedatabase.app/demodb.json",
    {
      method: "GET",
    }
  );
  const responseData = await response.json();
}

procitajButtonE1.addEventListener("click", getData);

console.log(responseData);

for (key in responseData) {
  let liE1 = document.createElement("li");
  ulE1.appendChild(liE1);
  liE1.innerText = responseData(key).poruka;
}

pročitajButtonE1.addEventListener("click", getData);
