import React from 'react';
import './App.css';

class AppClass extends React.Component {

  state = {
    title: null,
    url: null,
    explanation: null,
    isFetching: false,

  };

  componentDidMount() {

    this.setState({...this.state, isFetching: true});
    fetch('https://api.nasa.gov/planetary/apod?api_key=F7NDSvVq6xtFLM8IDjYHPEd7bG0GzdVH501agwwn')
      .then(response => {
        return response.json();
      })
      .then(responseData => {
        this.setState({ title: responseData.title, url: responseData.url, explanation: responseData.explanation, isFetching: false});
      });
  
    }

  render() {

    return (
      <div className='App'>
        { this.state.isFetching && <p>Loading NASA data...</p>}
        <h1>NASA picture of the day</h1>
        <h3>{this.state.title}</h3>
        <img src={this.state.url} alt={this.state.title} width={500} />
        <p>{this.state.explanation}</p>
      </div>
    );
  }
}

export default AppClass;
