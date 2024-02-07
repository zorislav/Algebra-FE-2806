
function User ({ime, years, onNameChange}){
    //PRVA OPCIJA JE da destruktuiranje objekta props u paramentru napravimo
     //odmah ovde gore na licu mjesta {ime, godine} umjesto upisanog
     // objekta PROPS!!!
     //DODAJEMO I FUNKCIJU ONNAME CHANGE KAO DODATNI PARAMETAR


    //const {ime, years} = props;
    // OVO JE DRUGA OPCIJA destruktuiranjem objekta props dobijamo dvije 
    //varijable sa vrijednostima ime i godine njihovim vrijednostima!!!


    // function nameChangeHandler (event){
       // console.log(event.target.value);
        ///upisali smo value imput elementa (preko event objekta i svojstva 
        //target) i za svaki upis dobijamo ispis u konzoli - TOP!
        //ALI OVO NE RADIMO JER ŽELIMO IMATI FUNKCIJU U PARENT-APP KOMPONENTI
    //}


    return (
    <>
      <p>Pozdav, moje ime je {ime} i imam {years} godina</p>
      <input type="text" value={ime} onChange={onNameChange}/>
      {/* Ovdi na raspolaganju imamo onChange property koji definira funkciju 
      koja će se izvršiti kada se desi taj onchange event!!! */}
      {/* Postavili smo property value na ime, tako da imamo kao plaholder u 
      input elementu prije upisa!! */}

      {/* ZA KORIŠTENJE OVE KRAĆE NOTACIJE REACT FRAGMENTA <> </> NE TREBA
       NAM UVOZ REACTA!!! */}
    </>
    );

    // return <p>Pozdav, moje ime je {props.ime} i imam {props.godine} godina</p>;
    //OVO JE TREĆA OPCIJA, UMJESTO DESTRUKTUIRANJA GORE!!!
}
//Radimo novu komponentu putem funkcije, BITNO JE DA KAO PARAMETAR STAVLJAMO
//PROPS KOJIM DOBIJAMO OBJEKT PROPS!!!
//E SADA PREKO TOG OBJEKTA PROPS MOŽEMO PRISTUPITI SVOJSTVIMA KOJE SMO DODALI
//U APP.JS FILEU NAŠOJ USERNAME FUNKCIJI, TE SADA MOŽEMO PRISTUPITI IM
//KAO OBIČNO SVOJSTVO OBJEKTA I DOBIJAMO NJIHOVU STVARNU VRIJEDNOST!!!!!!!!



export default User;
//Exportiramo komponentu
