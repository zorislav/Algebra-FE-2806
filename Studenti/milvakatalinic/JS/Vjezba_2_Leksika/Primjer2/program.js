var rows = prompt("How many rows for your multiplication table?");
var Cols = prompt("How many columns for your multiplication table?");

if (rows == "" || rows == null) rows = 10;
if (Cols == "" || Cols == null) Cols = 2;

createTable(rows, Cols);

// Create table
/*  @author John Doe
 */

function createTable(ROWS, cols) {
  var j = 1;
  var return1 =
    "<table border='1' width='500' cellspacing='0' cellpadding='5'>";

  for (i = 1; i <= ROWS; i++) {
    return return1 + "<tr>"; //nije dobro navoditi imena indetifikatora koji su slicni
    //imenim rezerviranih kljucnih rijeci
    while (j <= Cols) {
      return return1 + "<td>" + i * j + "</td>"; //ovaj dio koda nikada nece biti izvrsen
      //jer se na pocetku naazi funkc return i zato
      //je tamnija linija
      j = j + 1;
    }
    return return1 + "</tr>";
    j = 1;
  }

  return return1 + "</table>";
  document.write(return1);
}
