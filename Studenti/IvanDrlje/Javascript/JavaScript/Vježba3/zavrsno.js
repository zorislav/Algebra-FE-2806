/** 
*inicijalizacija varijabli
*/  //ovo je jsdoc komentiranje, za kon+mentiranje dokumentacije!!!


var first_name = 'Tony';

var first_name = 'John', //kada se više deklaracija/inicijalizacija radi od jednom odvajamo ih zarezom!!!!
    lastName = 'Doe',
    price = 0,
    discount = 78,
    fullPrice = 0,
    myBreak = [],
    $myObject ={};
console.log(price);
console.log(lastName); //kad imamo ... u vs kodu javlja nam grešku, doć kursorom na to mjesto i vidjeti šta je!!!

//kraj mog programa
console.log(typeof +[1]); //opetator + minja ovaj string u broj!!!
console.log(typeof +'1'); //isto !!!

var a = 10;
var b = 3.14;

console.log('5' - 3); // daje 2 implicitno daje zapravo minja prvi string u broj
var x = '5' - 3;
console.log(typeof x);

var y = '5' + 3;
console.log(y);
console.log(typeof y);

var k = '5' + '4';
console.log(k);
console.log(typeof k);

var j = '5' + + '5';
console.log(j);
console.log(typeof j);

var z = 'foo' + + 'bar';
console.log(z);
console.log(typeof z); // čudan sa 2 plusa provjerit

var m = '5' + - '2'; //ovo je zapravo '5' + (-2)
console.log(m);
console.log(typeof m); 


var l = 3;
console.log(typeof l);
console.log('5' +l -l);


var g = 3;
console.log(typeof g);
console.log('5' -g +g);


var h = '345';
console.log(h);
console.log(typeof h);
console.log(+h);
console.log(typeof +h);

//ovo je bitno radi API podataka koji dolaze iz vani, oni recimo odogvaraju samo sa stringovima
//onda moramo sve pretvoriti i broj