var names = ['John', 'Jane', 'Bob', , 'Mike'];
console.log(names);

// 1. dio
for(var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// Ili:
// for(var n of names) {
//     console.log(n);
// }

// 2. dio
names.push('Magdalena');
console.log(names);

// 3. dio
for (var element of names) {
    console.log(element);
    if(element === 'Jane') break;
}

// 4.dio
// for(var i = 0; i < names.length; i++) {
//     if(!names[i]) {
//         names.splice(i, 1)
//     }
// }
// console.log(names);

// Dodatno
var noviNiz = names.filter(function(name){
    return name !== undefined;
});
console.log(noviNiz);