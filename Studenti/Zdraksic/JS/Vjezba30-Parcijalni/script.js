const loadSpin = document.getElementById("loadingSpinner");

const noSongsMsg = document.getElementById("noSongs");

const inputElement = document.getElementById("searchTerm");

const ulElement = document.getElementById("songsList");

const createElement = (songData) => {
  const listItem = document.createElement("li");
  const listItemP = document.createElement("p");

  listItemP.innerHTML = `${songData.artist} - ${songData.song}`;

  listItem.appendChild(listItemP);

  return listItem;
};

const fetchData = async (inputElValue) => {
  const url = `https://itunes.apple.com/search?term=${inputElValue}&media=music`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const returnData = data.results.map((result) => {
      return {
        artist: result.artistName,
        song: result.trackName,
      };
    });

    return returnData;
  } catch (error) {
    return [];
  }
};

const updateMusicList = () => {
  clearTimeout(timeout);

  var timeout = setTimeout(async function () {
    while (ulElement.firstChild) {
      ulElement.removeChild(ulElement.firstChild);
    }

    const inputElementValue = document.getElementById("searchTerm").value;

    if (inputElementValue) {
      noSongsMsg.style.display = "none";

      loadSpin.style.display = "block";

      var retData = [];

      retData = await fetchData(inputElementValue);

      loadSpin.style.display = "none";

      if (retData.length !== 0) {
        for (var i in retData) {
          if (retData[i].artist && retData[i].song) {
            const listItemElement = createElement(retData[i]);

            ulElement.appendChild(listItemElement);
          }
        }
      } else {
        noSongsMsg.style.display = "block";
      }
    } else {
      noSongsMsg.style.display = "block";
    }
  }, 500);
};

inputElement.addEventListener("keyup", updateMusicList);
