const inputElement = document.getElementById("searchTerm");
const ulElement = document.getElementById("songsList");
const noSongsMsg = document.getElementById("noSongs");
const loadSpin = document.getElementById("loadingSpinner");

var timeout = null;

const createElement = (songData)=> {

 const listItem = document.createElement("li");
 const listItemP = document.createElement("p");

 listItemP.innerHTML = `${songData.artist} - ${songData.song}`;
 listItem.appendChild(listItemP);

 return listItem;

}

const fetchData = async (inputElValue) => {

  const url = `https://itunes.apple.com/search?term=${inputElValue}&media=music`;

  try {

    const response = await fetch(url);
    const data = await response.json();

    const returnData = data.results.map(result => {
      return {
        artist: result.artistName,
        song: result.trackName,
      }
    });

    return returnData;
  
  } catch (error) {

    console.log(error);
    return [];
  }

}

const updateMusicList = (event) => {

  clearTimeout(timeout);

  timeout = setTimeout (async () => {

    while (ulElement.firstChild) {
      ulElement.removeChild(ulElement.firstChild);
    }

    const inputElementValue = inputElement.value;

    if( inputElementValue ) {

       // Izbriši no songs
       noSongsMsg.style.display = "none";


       // Prikaži loading spinner
       loadSpin.style.display = "block";

       // Dohvati podatke
       var retData =  [];
       retData =  await fetchData(inputElementValue);
      
       loadSpin.style.display = "none";

        if(retData.lenght !== 0) {

          //Prikazi podatke
          for( var i in retData) {

            if (retData[i].artist && retData[i].song) {
            
              const listItemElement = createElement(retData[i]);

              ulElement.appendChild(listItemElement);
            }

          }


        } else {
          noSongsMsg.style.display = "block";

        }

        // Obriši loading spinner

      } else {
        noSongsMsg.style.display = "block";
      }

  }, 800);

}

inputElement.addEventListener("keyup", updateMusicList);