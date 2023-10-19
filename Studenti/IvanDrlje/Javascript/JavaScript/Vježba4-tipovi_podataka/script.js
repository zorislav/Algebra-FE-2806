var x = 'Lorem ipsum',
    y = 2345,
    z = '2345',
    q = false,
    w;
    
//1. iste po sadržaju su y i z

x += '3' + 1;
//x = x + '3' + 1; ovo je isto kao gore
console.log(x);
//2. Lorem ispum31 daje konzola



//3. vrijednost varijable baa - konzola daje baNaNa +i string daje broj onda JS kaže da to nije broj
var baa = 'b' + 'a' + + 'a' + 'a';
console.log(baa);

var baa = 'b' + 'a' + + '3' + 'a'; // ovdi konzola daje ba3a - zanimljivo, naučit
console.log(baa);


//4. tip podatka w je undefined
console.log(typeof w);
console.log(w);