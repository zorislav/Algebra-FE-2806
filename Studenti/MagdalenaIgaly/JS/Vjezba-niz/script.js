var names = ['John', 'Jane', 'Mike'];
console.log(names);

// FOREACH
names.forEach (function(element) {
    console.log(element);
    console.log(typeof element);
});

// MAP
var noviNiz = names.map(function(element) {
    return 'Ime: ' + element;
});
console.log(noviNiz);

// MATRIX
var matrix = [[1, 2, 3], ['John', 'Jane', 'Mike']];
console.log(matrix[0][1]);

matrix[0][4] = 5;
console.log(matrix);

matrix[1] = [];
console.log(matrix);
