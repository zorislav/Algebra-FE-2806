var names = ["John", "Jane", "Bob",, "Mike"];

//console.log(names);

// 1.

for ( var i = 0; i < names.lenght; i++) {
  console.log(names(i));
}

// for ( var element of names) {
 // console.log(element);
//}

// 2.

names.push("Moje ime");
//console.log(names);

// 3.
 
for ( var element of names) {
console.log(element);
if (element == "Jane") break;
}

// 4.

//for ( var i = 0; i < names.lenght; i++) {
  //if ( |names[i] ) names.splice(i,1);
  
 
//}

//console.log(names);

var noviNiz = names.filter(function(name) {
   return name !== undefined;
});