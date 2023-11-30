const inputEl = document.getElementById("input");
const ulEl = document.getElementById("lista");
const posaljiButtonEl = document.getElementById("posalji");
const procitajButtonEl = document.getElementById("procitaj");
const lsEl = document.getElementById("loading-spinner");

async function getData() {
  try {
    lsEl.style.display = "block";

    const response = await fetch(
      "https://algebra-fe-default-rtdb.europe-west1.firebasedatabase.app/demodb.json",
      {
        method: "GET",
      }
    );

    const responseData = await response.json();

    lsEl.style.display = "none";

    while (ulEl.firstChild) {
      ulEl.removeChild(ulEl.firstChild);
    }

    for (key in responseData) {
      let liEl = document.createElement("li");
      ulEl.appendChild(liEl);
      liEl.innerText = responseData[key].poruka;
    }
  } catch (error) {
    alert(error);
  }
}

async function postData() {
  const text = inputEl.value.trim();

  const postObj = {
    poruka: text,
  };

  try {
    lsEl.style.display = "block";

    const response = await fetch(
      "https://algebra-fe-default-rtdb.europe-west1.firebasedatabase.app/demodb.json",
      {
        method: "POST",
        body: JSON.stringify(postObj),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const responseData = await response.json();
    console.log(responseData);

    lsEl.style.display = "none";

    alert("Podaci poslani");
    inputEl.value = "";
  } catch (error) {
    alert(error);
  }
}

procitajButtonEl.addEventListener("click", getData);
posaljiButtonEl.addEventListener("click", postData);
