import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Histogram from './Components/CryptoMoneda';

class App extends Component {

  render() {
    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
         <p className="App-title">CryptoMoneda BTC</p>
         <Histogram coinType="BTC" color="#1a1aff"/>
         <p className="App-title">CryptoMoneda ETH</p>
         <Histogram coinType="ETH" color="#391313"/>
         <p className="App-title">CryptoMoneda DASH</p>
         <Histogram coinType="DASH" color="#00e600"/>
      </div>
    );
  }
}

export default App;