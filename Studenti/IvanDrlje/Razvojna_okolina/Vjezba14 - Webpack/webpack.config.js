const path = require('path');
//učitavamo ovaj path standardni dio JS-a da bi mogli efikasnije raditi s putanjama

module.exports = {
    entry: './main.js',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        //ovo kaže webpacku putanja gdje treba napraviti bundle je direktorij
        //koji se zovi dist, ako ga nema, napravi ga
        filename: 'myscripts.js'
        //znači nastat će folder dit i ovaj file u njemu myscript.js!!!
    }
}
//ovaj objekt koji exportiramo je naša webpack konfiguracija