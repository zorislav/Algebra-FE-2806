var password = '01234567abc0';

// 1.dio - Lodash library - Napisati funkciju koja provjerava da li su svi znakovi jedinstveni
function isUnique(str) {
        return _.uniq(str).length == str.length;
}
console.log('isUnique(password) = ' + isUnique(password));

// 1.dio - bez Lodasha - 1a
function isUnique1a(str) {
        return new Set(str).size == str.length;
}
console.log('isUnique1a(password) = ' + isUnique1a(password));

// 1.dio - bez Lodasha - 1b
function isUnique1b(str) {
        var strChars = '';

        for (var i of str) {
                if (strChars.includes(i)) {
                        return false;
                }
                strChars += i;
        }

        return true;
}
console.log('isUnique1b(password) = ' + isUnique1b(password));

// 2.dio - Lodash library - Napisati funkciju koja provjerava da li su svi znakovi brojke
function isNum(str) {
        if (_.toNumber(str)) return true;
        return false;
}
console.log('isNum(password) = ' + isNum(password));

// 2.dio - bez Lodasha (ASCII table)
function inNum2a(str) {
        for (var i = 0; i < str.length; i++) {
                if (str.charCodeAt(i) < 48 || str.charCodeAt(i) > 57)
                        return false;
        }
        return true;
}
console.log('inNum2a(password) = ' + inNum2a(password));

// 3.dio - Lodash library - Napisati funkciju koja uzima password i skraćuje ga na 10 znakova, ako je broj znakova veći od 10
function reduceLength(str) {
        if (str.length > 10) {
                return _.take(str, 10);
        }
        return str;
}
console.log('reduceLength(password) = ' + reduceLength(password));

// 3.dio - bez Lodasha
function reduceLength3a(str) {
        if (str.length > 9) {
                return str.substring(0, 10);
        }
        return str;
}
console.log('reduceLength3a(password) = ' + reduceLength3a(password));
