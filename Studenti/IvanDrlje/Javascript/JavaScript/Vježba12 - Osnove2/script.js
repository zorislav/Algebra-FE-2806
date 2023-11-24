
var password = '1234561';


//1.------------------------------------

function isUnique(str){
   return _.uniq(str).length == str.length;
   //metoda za provjeru ima li duplikata, ako je true to je to, ako ne ima duplikata
};

console.log('opcija: ' + isUnique1a(password));

//ovo je bilo koristit loadash

//1a--------------------------------
function isUnique1a(str){
   return  new Set(str).size == str.length;
   //u setu ne može bit duplikata, zato radimo novi set
}

console.log('opcija1a: ' + isUnique1a(password));

//1b-------------------------------------------

function isUnique1b(str){

    var strChars = '';

    for(var i of str){
        if(strChars.includes(i)) return false;
        strChars += i;
        console.log(strChars);
    }

    return true;
};

isUnique1b(password);
console.log('opcija1b: ' + isUnique1a(password));



//2.---------------------------------------------------

function  isNum(str){
    if(_.toNumber(str)) return true;//ovo je u sklopu if bloka
    return false;//ovo nije u if bloku
        
};

console.log('opcija2: ' + isNum(password));

//2a----------------------------------------------

function isNum2a(str){
    for (var i = 0; i < str.length; i++){
        if(str.charCodeAt(i) < 48 || str.charCodeAt(i) > 57){
            return false;
        }
    }

    return true;
};

console.log(password.charCodeAt(0)); // daje 49??????????? unicode
console.log('opcija2: ' + isNum2a(password));

//3.--------------------------------------------------------

function reduceLen (str){
    if(str.length > 9){
        var tempStr =  _.take(str, 10);
        return tempStr;
    };

   return str;
};

console.log('opcija3: ' + reduceLen(password));
//ova funkcija reducira broj znakova na 10!!!

//3a.---------------------------------------------------

function reduceLen3a(str){
    if(str.length > 9 ){
        var temp = str.substring(0, 10);
        return temp;
    }
    return str;
};

console.log('opcija3a: ' + reduceLen3a(password));