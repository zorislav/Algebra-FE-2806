var words = ['quickest', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

function findLongestWord(arr){
    var word = '';

    for(var i = 0; i < arr.length; i++){

        if(word.length < arr[i].length){
            word = arr[i]; // spremamo u tekući element  i minja se ako je neki veći!!!
        }
    }
    return word;

};

//




//moraju bit zagrade ako želimo da se funkcija izvršava na tom mjestu


console.log(findLongestWord(words));


//MOŽE SE POZVATI I OVAKO NIŽE
//var ivan = findLongestWord;
//console.log(ivan(words));
//ovdje smo samo dodijelili funkciju varijabli Ivan, ali ona nije pozvana!!!
//sada možemo pozvati i ivan();



