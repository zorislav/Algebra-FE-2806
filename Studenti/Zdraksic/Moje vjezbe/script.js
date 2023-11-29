const inputElement = document.getElementById("searchTerm");
const ulElement = document.getElementById("songsList");
const noSongsMsg = document.getElementById("noSongs");
const loadSpin = document.getElementById("loadingSpinner");

const createElement = (songData) => {
  const listItem = document.createElement("li");
  const listItemP = document.createElement("p");

  listItemP.innerHTML = `${songData.artist} - ${songData.song}`;
  listItem.appendChild(listItemP);

  return listItem;
};

const fetchData = async (inputElValue) => {
  const url = `https://itunes.apple.com/search?term=${inputElValue}&media=music`;
  const response = await fetch(url);
  const data = await response.json();
  const returnData = data.resaults.map((resault) => {
    console.log(`${resault.artistName} - ${resault.trackName}`);
    return {
      artist: resault.artistName,
      song: resault.trackName,
    };
  });
  return returnData;
};

const updateMusicList = async (event) => {
  clearTimeout(timeout);
  timeout = setTimeout(async () => {
    while (ulElement.firstChild) {
      ulElement.removeChild(ulElement.firstChild);
    }

    const inputElementValue = inputElement.value;

    if (inputElementValue) {
      //izbrisi no songs
      noSongsMsg.style.display = "none";

      //prikazi loading spinner
      loadSpin.style.display = "block";

      //dohvati podatke
      var retData = [];
      retData = await fetchData(inputElementValue);
      loadSpin.style.display = "none";
      if (retData.lenght !== 0) {
        for (var i in retData) {
          if (retData[i].artist && retData[i].song) {
            const listItemElement = createElement(retData[i]);
            ulElement.appendChild(listItemElement);
          }
        }
      } else {
        noSongsMsg.style.display = "blosk";
      }

      //obrisi loading spinner
      loadSpin.style.display = "none";
    } else {
      noSongsMsg.style.display = "block";
    }
  }, 800);
};

inputElement.addEventListener("keyup", updateMusicList);
