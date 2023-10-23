var names = ["John", "Jane", "Bob", "Mike"];

// 1.
for (var i = 0; i < names.length; i++) {
  console.log(names[i]) ;
  
}

//2.
names.push("Tomislav Galović");

//console.log(names);

// 3. 

for(var element of names) {
  console.log(element);
  if(element==="Jane")
  break;
}

// 4.
for(var i=0; i < names.length; i++) {
  if(!names[i]) {
    names.splice(i,i);
  }
  

}

console.log(names);

