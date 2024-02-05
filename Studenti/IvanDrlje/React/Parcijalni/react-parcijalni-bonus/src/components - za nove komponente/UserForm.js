import React from "react";
//Da bismo imali klasnu komponentu
//IAKO JE BOLJE UČIT FUNKCIJSKE!!!!!
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import FormLabel from "react-bootstrap/esm/FormLabel";


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



    setUser(userName);
    //Ovdi sada pozivamo FUNKCIJU SETuSER - ZAPRAVO GETDATA KOJA JE 
    //DEFINIRANA U APP.JS!!! TOP


  }
    


  //render vraća JSX kod u našoj klasnoj komponenti
  render() {
    const { userName } = this.state;
    //izvlačimo userName iz stanja

    return (
      <Form onSubmit={this.handleUserSelected.bind(this)}>
        {/* HVATAMO KLIK NAMIŠA ZAPRAVO SUBMIT TYPE OD BOTUNA ISPOD, TAKO DA
        NA FOR ELEMENTU HVATAMO ONSUBMIT I TU RADIMO NEKU FUNKCIJU */}
        
            {/* OVDI SMO SA STYLE PRIMJENILI CSS PRAVILA KOJA IMAMO DEFINIRANA
            DOLI U STYLES OBJEKTU, A PRISTUPAMO SVOJSTVU CONTAINER!!! */}
          <Form.Label >Github username</Form.Label>
          {/* ovaj htmlfor je ona poveznica sa input elementom priko id-a */}
          <FormControl 
            size="lg"
            type="text"
            value={userName}
            onChange={this.handleUserChange.bind(this)}
           autoFocus placeholder="e.g. facebook"/>
          {/* SPOJILI SMO VALUE SA STANJE U INPUTU DA BUDE AŽURNO */}
          {/* DALJE RADIMO ONcHANGE ATRIBUT DA BISMO SPOJILI lokalno
                    STANJE SA UPISOM U FORMU */}
          {/* dalje da bi ovo se povezalo moramo stavit metodu bind i
                    u parametar this, jer je ovo klasa */}
          <div  className="d-grid gap-2">
            <Button type="submit" size="lg" variant="secondary" className="mt-5">GO!</Button>
          </div>
          {/* oVAJ BOTUN SUBMIT HVATAMO GORI U FORM */}
        
      </Form>
    );
  }
}

export default UserForm;
//radimo export default da ga možemo importirati ovu komponentu u App.js

