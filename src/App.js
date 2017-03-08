import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Intro from './components/Intro'
import Footer from './components/Footer'

class App extends Component {

  constructor() {
    super()

    this.state = {
      name: 'Ray'
    }

    this.changeName = this.changeName.bind(this)
  }

  changeName(name) {
    this.setState({
      name
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hello {this.state.name}</h2>
        </div>
        <Intro
          name={this.state.name}
          age="26"
          changeName={this.changeName}
        />
        <Footer name={this.state.name} />
      </div>
    );
  }
}

export default App;
