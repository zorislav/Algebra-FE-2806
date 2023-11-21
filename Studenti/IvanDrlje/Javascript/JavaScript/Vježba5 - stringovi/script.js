
var text = ' Lorem ipsum dolor sit amet';

//1.
var duljinaStringa = text.length;
console.log(duljinaStringa);

//2. izdvojit sit u varijablu

var rijecSit = text.substr(19, 3); //uzima broj na kojem počine i daje 3 znaka iza,
// ali ovo je stara metoda kaže VS code, zato je prekrižena iako radi
console.log(rijecSit);

//3. Zaminit amet sa elit

var noviText = text.replace('amet', 'elit'); // vraća novi string pa ga treba ubacit u novu varijablu
console.log(noviText);


//4. konkatenacija u novu varijablu

var dodaniText = text + ', cosecteur adipisit elit';
console.log(dodaniText);

//5. prebacit u velika slova

var velikiText = text.toUpperCase();
console.log(velikiText);

//6. maknite početnu prazninu u stringu

var bezPrazninaText= text.trim();
console.log(bezPrazninaText);

//7. nađi slovo na poziciji 12

var slovo = text.charAt(12);
console.log(slovo); // konzola ne ispisuje ništa jer je na poziciji 12 razmak :)



// bonus-----------------------------------------------
var x = 1;
var y = x++; // konzola daje 1
var k = ++x; // konzola daje 2
console.log(y);

// bonus2

var x  = 'bilo koji sadržaj';
var y = '';

var z = (!!x) ? 'Da' : 'Ne';
var d = y ? 'da' : 'ne';
var m = (!x) ? 'da' : 'ne';

console.log(typeof(!!x));
console.log(!!x); // konzola daje true
console.log(z);
console.log(d);
console.log(m);
//prazan niz i objek isto daju true, //nula, null, nan, undefined false


