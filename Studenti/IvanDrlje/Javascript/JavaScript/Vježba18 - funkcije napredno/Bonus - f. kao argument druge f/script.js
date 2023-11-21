
function vratiNesto(x){
    var y = x(1);//OVA LINIJA NAM GOVORI!! DA fukcija zapravo očekuje fukciju kao parametar
    return y;
};


function vratiMene (z){
    return z/2;
};

console.log(vratiMene(4));//konzola logično daje 2


//var k = vratiNesto(4);//konzola daje grešku jer fukcija očekuje fukciju kao argument


var k = vratiNesto(vratiMene);
console.log(k);

//-----------------------------------------------------------------
//kada je funkcija vraćena vrijednost druge fukcije

function vratiNesto1(x){
    return function(){
        return x;
    }
}

var m = vratiNesto1(true);
console.log(m);// konzola kaže da je m anonimna fukcija!!!
console.log(m());//ovako smo pozvali i drugu fukciju te konzola onda daje true!!!

//TO SMO MOGLI NAPRAVITI I OVAKO !!!!
var g = vratiNesto1(true)();
console.log(g);



