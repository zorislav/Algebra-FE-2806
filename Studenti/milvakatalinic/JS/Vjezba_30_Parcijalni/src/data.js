export const fetchData = async (inputElValue) => {
  const url = `https://itunes.apple.com/search?term=${inputElValue}&entity=song`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const returnData = data.results.map((result) => {
      console.log(
        `${result.artistName} - ${result.trackName}`
      ); /*izdvaja samo izvodjace i njihove pjesme */
      return {
        artist: result.artistName,
        song: result.trackName,
      };
    });
    return returnData;
  } catch (error) {
    console.log(
      error
    ); /*pomocu ove funkcije mozemo vidjeti u inspectu gdje je greska*/
    return [];
  }
};
