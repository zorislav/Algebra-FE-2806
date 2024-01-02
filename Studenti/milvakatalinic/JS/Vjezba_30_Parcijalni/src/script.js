import { fetchData } from "./data.js"; /*kad koristimo export/imp module onda je vazno da u html datoteci u script liniji upisemo type=module*/
import { createElement } from "./render.js";

const inputElement = document.getElementById("searchTerm");
const ulElement = document.getElementById("songsList");
const noSongsMsg = document.getElementById("noSongs");
const loadSpin = document.getElementById("loadingSpinner");

var timeout = null;

export default () => {
  const updateMusicList = (event) => {
    clearTimeout(timeout);

    timeout = setTimeout(async () => {
      while (ulElement.firstChild) {
        ulElement.removeChild(
          ulElement.firstChild
        ); /*pomocu ove funkcije, brisemo povijest upisa i prikazuje se naziv pjesama izvodjaca kojeg smo utipkali */
      }

      const inputElementValue = inputElement.value;
      if (inputElementValue) {
        noSongsMsg.style.display = "none";
        loadSpin.style.display = "block";

        var retData = [];
        retData = await fetchData(inputElementValue);

        loadSpin.style.display = "none";

        if (retData.length !== 0) {
          for (var i in retData) {
            if (retData[i].artist && retData[i].song) {
              /*dodatna provjera jer nnismo sigurni kakvi su podaci, da li ce api funkcionirati i uvijek vratiti izvodjaca i pjesmu
                                                      moramo razmisljati sto ako ne dobijemo podatke? ova dodatna provjera onemogucava rusenje stranice */
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
    }, 800); /*omogucava da se lista prikaze tek nakon sto uipkamo cijeli naziv, zato je vazno da vrijeme bude optimalno kao u ovom primjeru */
  };

  inputElement.addEventListener("keyup", updateMusicList);
};
