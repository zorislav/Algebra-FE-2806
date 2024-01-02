
function UserFunction ({ime, godine}){
    //PRVA OPCIJA JE da destruktuiranje objekta props u paramentru napravimo
     //odmah ovde gore na licu mjesta {ime, godine} umjesto upisanog
     // objekta PROPS!!!


    //const {ime, godine} = props;
    // OVO JE DRUGA OPCIJA destruktuiranjem objekta props dobijamo dvije 
    //varijable sa vrijednostima ime i godine njihovim vrijednostima!!!

    return <p>Pozdav, moje ime je {ime} i imam {godine} godina</p>;

    // return <p>Pozdav, moje ime je {props.ime} i imam {props.godine} godina</p>;
    //OVO JE TREĆA OPCIJA, UMJESTO DESTRUKTUIRANJA GORE!!!
}
//Radimo novu komponentu putem funkcije, BITNO JE DA KAO PARAMETAR STAVLJAMO
//PROPS KOJIM DOBIJAMO OBJEKT PROPS!!!
//E SADA PREKO TOG OBJEKTA PROPS MOŽEMO PRISTUPITI SVOJSTVIMA KOJE SMO DODALI
//U APP.JS FILEU NAŠOJ USERNAME FUNKCIJI, TE SADA MOŽEMO PRISTUPITI IM
//KAO OBIČNO SVOJSTVO OBJEKTA I DOBIJAMO NJIHOVU STVARNU VRIJEDNOST!!!!!!!!



export default UserFunction;
//Exportiramo komponentu
