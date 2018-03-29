import React, { Component } from 'react';

import './App.css';
import FilmList from './components/FilmList.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films:[],
      siteLoad : false
    };
  }

  componentDidMount() {
      fetch('http://www.snagfilms.com/apis/films.json?limit=10')
      .then(response =>{
      return response.json();
      })
      .then(data => {
        this.setState({films: data.films.film})
      });
  }


  render() {
    console.log(this.state.films)
    return (
      <div>
        <FilmList films={this.state.films} />
      </div>
    );
  }
}

export default App;
