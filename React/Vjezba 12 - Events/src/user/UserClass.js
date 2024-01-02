import React from 'react';

class UserClass extends React.Component {


  render(){

    const {name} = this.props;

    return <p>Pozdrav, moje ime je {name} i imam {this.props.years} godina.</p>;
  }
}
export default UserClass;