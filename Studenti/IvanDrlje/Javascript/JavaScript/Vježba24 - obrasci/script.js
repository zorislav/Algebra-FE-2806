
import { Exercise } from './first.js'; 
//ovo naravno vrijedi samo ako je first u istom folderu, ako ne triba nać i drugi trag /folder
//npr  ./folderNeki/first.js




console.log(Exercise.getTotalSteps());//konzola daje 0
Exercise.walk();
Exercise.walk();
Exercise.walk();
console.log(Exercise.getTotalSteps());//konzola daje 3, jer je walk pozvat 3 puta

//moramo pozvati-upaliti walk da bismo povećali korake, a posli ih možemo ispisati
//u konzoli pozivanjem funkcije getTotalSteps
