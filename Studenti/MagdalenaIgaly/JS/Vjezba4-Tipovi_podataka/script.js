var x = "Lorem ipsum", 
    y = 2345,
    z = "2345",
    q = false,
    w;

if (z == y) { // Usporedujemo samo vrijednost(sadrzaj)
    console.log("z == y")
}

if (z === y) { // Usporedujemo i vrijednost(sadrzaj) i type
    console.log("z === y")
}

x += "3" + 1; 
console.log(x);  // Lorem ipsum31

var baa = "b" + "a" + "a" + "a";
console.log(baa);  // baaa