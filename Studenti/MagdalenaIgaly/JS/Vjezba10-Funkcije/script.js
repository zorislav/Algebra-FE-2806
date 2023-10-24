var words = ['quickest', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

function find_longest_word(array) {
    var longest_word = '';

    for(var a of array) {
        if(a.length > longest_word.length) {
            longest_word = a;
        }
    }

    return longest_word;

}

var longest_word = find_longest_word(words);
console.log(longest_word);