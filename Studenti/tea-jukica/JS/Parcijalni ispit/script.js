
async function searchFor() {
  clearData();
  const searchValue = document.getElementById("input").value;
  if (!searchValue) {
    const results = document.getElementById("results");
    results.style.display = "none";
    return;
  }
  loadingData();

  try {
    const data = await getData(searchValue);
    const parsedData = parseData(data);
    var currentResult = document.getElementById("current-results");

    if (parsedData.length === 0) {
      currentResult.innerText = `No results found for ${searchValue}`;
    } else {
      parsedData.forEach((item) => {
        displayData(item);
        currentResult.innerText = `Results for ${searchValue}`;
      });
    }
    dataLoaded();
  } catch (error) {
    dataLoaded();
    alert("Error. Please try again.");
  }
}

async function getData(searchValue) {
  try {
    const response = await fetch(
      `https://itunes.apple.com/search?term=${searchValue}&media=music`,
      { method: "GET" }
    );
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    throw new Error("Failed to fetch data.");
  }
}

function parseData(data) {
  let parsedData = [];

  for (var i = 0; i < data.results.length; i++) {
    let parsedItem = {
      artistName: data.results[i].artistName,
      trackName: data.results[i].trackName,
    };

    parsedData.push(parsedItem);
  }
  return parsedData;
}

function displayData(data) {
  const ulEl = document.getElementById("lista");
  const newLiEl = document.createElement("li");
  newLiEl.classList.add("list-item");
  newLiEl.innerText = `${data.artistName} - ${data.trackName}`;
  lista.appendChild(newLiEl);
}

function clearData() {
  const ulEl = document.getElementById("lista");

  if (lista) {
    lista.innerHTML = "";
  } else {
    console.log("List element not found");
  }
}

function loadingData() {
  const loadingSpinner = document.getElementById("loading-spinner");
  const results = document.getElementById("results");

  loadingSpinner.style.display = "block";
  results.style.display = "none";
}

function dataLoaded() {
  const loadingSpinner = document.getElementById("loading-spinner");
  const results = document.getElementById("results");

  loadingSpinner.style.display = "none";
  results.style.display = "block";
}
