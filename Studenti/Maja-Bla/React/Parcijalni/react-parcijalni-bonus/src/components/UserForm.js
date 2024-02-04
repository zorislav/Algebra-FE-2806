import React from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

class UserForm extends React.Component{


  state = {
    userName: ''
  };


  handleUserChange = (event) => {
    const userName = event.target.value;
    this.setState({userName})
  };

  handleUserSelected = (event) => {
    event.preventDefault();
    const { userName } = this.state;
    const { setUser } = this.props;


    setUser(userName);
  }

  



  render(){

    const { userName} = this.state;


    return(
    <Form onSubmit={this.handleUserSelected}>
      
        <Form.Label>Github username: </Form.Label>
          <FormControl 
          size='lg'
          type="text" 
          placeholder='e.g. facebook'
          value={userName} 
          onChange={this.handleUserChange} 
          autofocus
        />
        <div className='d-grid gap-2'>
          <Button size='lg' variant='secondary' className='mt-5' type='submit'>GO!</Button>
        </div>
    </Form>
    );
  }
}

export default UserForm;
