var words = ["quickest", "brown", "fox", "jumps", "over", "the", "lazy", "dog"];

function findLongestWord(arr){
    
    var word = "";

    for (var i = 0; i < arr.lenght; i++){
        
        if( word.length < arr[i].lenght ){
            word = arr[i];
        }
    }

    return word;
}

findLongestWord(words);


console.log(findLongestWord(words));