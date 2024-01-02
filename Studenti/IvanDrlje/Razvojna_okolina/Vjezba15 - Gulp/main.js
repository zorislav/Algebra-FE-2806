const jqr = require('jquery');
//daje našoj aplikaciji do znanja da želimo koristiti JQuery

window.$ = window.jQuery = jqr;
//u kojoj god sintaksom koristili povezujemo sve ove gore objekte sa učitanim JQueriem!!!

window.Handlebars = require('handlebars');
//uklučujemo handlebars

import 'bootstrap';
//uključujemo bootstrap

require('./src/script.js');
//uključujemo našu datoteku

//OVO NAM TRIBA ZA NAPRAVIT JEDAN BUNDLE KOJI UKLJUČUJE SVE OVO!!!