import React from "react";
//Da bismo imali klasnu komponentu
//IAKO JE BOLJE UČIT FUNKCIJSKE!!!!!

class UserForm extends React.Component {
  //treba nam lokalno stanje da prihvati što upisujemo u input element!!!
  state = {
    userName: "",
  };
  //ovo je početno stanje

  //Sada radimo funkciju koja će reagirati na svaki upis u foru i ažurirati
  //naše stanje
  handleUserChange(event) {
    const userName = event.target.value;
    //U varijablu smo spremili objekt event, sa atributom target koji nam
    //pokazuje koji je element trigeriao event i value da imamo vrijednost
    //upisa u naš obrazac.
    this.setState({ userName });
    //ovo smo sada zapisali u lokalno stanje
  }


  //sada radimo funkciju za hvatanje onog onSubmita na formu
  handleUserSelected(event){
    //Event objekt dobijamo kod svakog event handlera, samo ovisi oćemo li ga
    //mi koristiti ili ne
    event.preventDefault();
    //S OVIM SMO PREVENIRALI KLASIČNO PONAŠANJE BROWSERA, SLANJE SUBMITA

    const {userName} = this.state;
    //Izdvajamo username iz stanja

    const {setUser} = this.props;
    //IZ PROPSA PRIKO ATRIBUTA NA KOMPONENTI U APP.JS POVEZUJEMO SE SA FUNKCIJOM
    //GETDATA KOJU SMO TAMO NAPISALI


    // if(!userName.trim()){
    //   //ovo stavljamo opciju ako ništa nije upisano u obrazac da nam izbaci 
    //   //alert ali stavljamo i metodu trim ako neko stavi razmake da isto izbaci
    //   //grešku
    //   alert('Please enter user name');
    // }

    setUser(userName);
    //Ovdi sada pozivamo FUNKCIJU SETuSER - ZAPRAVO GETDATA KOJA JE 
    //DEFINIRANA U APP.JS!!! TOP


  }
    


  //render vraća JSX kod u našoj klasnoj komponenti
  render() {
    const { userName } = this.state;
    //izvlačimo userName iz stanja

    return (
      <form onSubmit={this.handleUserSelected.bind(this)}>
        {/* HVATAMO KLIK NAMIŠA ZAPRAVO SUBMIT TYPE OD BOTUNA ISPOD, TAKO DA
        NA FOR ELEMENTU HVATAMO ONSUBMIT I TU RADIMO NEKU FUNKCIJU */}
        <div style={styles.container}>
            {/* OVDI SMO SA STYLE PRIMJENILI CSS PRAVILA KOJA IMAMO DEFINIRANA
            DOLI U STYLES OBJEKTU, A PRISTUPAMO SVOJSTVU CONTAINER!!! */}
          <label htmlFor="name" style={styles.label}>Github username</label>
          {/* ovaj htmlfor je ona poveznica sa input elementom priko id-a */}
          <br />
          <input id="name"
            type="text"
            value={userName}
            onChange={this.handleUserChange.bind(this)}
           autoFocus placeholder="e.g. facebook"
           style={styles.input}/>
          {/* SPOJILI SMO VALUE SA STANJE U INPUTU DA BUDE AŽURNO */}
          {/* DALJE RADIMO ONcHANGE ATRIBUT DA BISMO SPOJILI lokalno
                    STANJE SA UPISOM U FORMU */}
          {/* dalje da bi ovo se povezalo moramo stavit metodu bind i
                    u parametar this, jer je ovo klasa */}
          <button type="submit" style={styles.button}>GO!</button>
          {/* oVAJ BOTUN SUBMIT HVATAMO GORI U FORM */}
        </div>
      </form>
    );
  }
}

export default UserForm;
//radimo export default da ga možemo importirati ovu komponentu u App.js



//OVO RADIMO OBJEKT SA CSS STILOVIMA  ZA PRIMJENU za ovaj gore div na primjer
const styles ={
    container: {
        paddingLeft: 50, //50 je u pixelima ali se ne piše
        paddingRight: 50
    },
    label: {
        fontWeight: 'bold'
    },
    input: {
        width: '100%',
        marginTop: 10,
        boxSizing: 'border-box'
        //stavljamo border box jer nam dimenzije nisu iste
    },
    button: {
        marginTop: 20,
        width: '100%'
    }
};