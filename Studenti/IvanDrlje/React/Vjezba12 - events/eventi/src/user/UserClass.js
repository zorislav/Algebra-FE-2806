
import React from 'react';
//importiramo Reactz iz reacta da bismo mogli napravit klasnu kompnentu!!!


class UserClass extends React.Component {

    render(){
        const {name, years} = this.props;
        //OVDI NE MOŽEMO KAO U FUNKCIJI KORISTITI PARAMETAR/ARGUMENT NEGO OVAKO
        //UNUTAR RENDER FUNKCIJE DESTRUKTUIRAMO OBJEKT PROPS, ALI S OBZIROM
        //DA SMO U KLASI MORAMO KORISTITI THIS.PROPS!!!


        return <p>Pozdrav, moje ime je {name} i imam {years} godina</p>;

        //B OPCIJA BEZ DESTRUKTUIRANJA!!!
        // return <p>Pozdrav, moje ime je {this.props.name} i imam 
        // {this.props.years} godina</p>;
    }
}


export default UserClass;
//exportiramo komponentu
