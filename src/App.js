import React, { Component } from 'react';
import logo from './logo.svg';
import './App.sass';
import './topBar.sass';
import './style.sass';
import Buttons from './Buttons'; // Assuming the Buttons component is in a file named Buttons.js

class App extends Component {
  componentDidMount() {
    // Selecting the parent nodes
    const createdTopBar = document.querySelector('.topBarWrapper');
    const majorDiv = document.querySelector('.major');

    // Creating instances of the Buttons class
    const menuButtons = new Buttons(
      createdTopBar,
      ['Appointment', 'History', 'About Us', 'Subscription', 'Search'],
      ['Appointment', 'History', 'About Us', 'Subscription', 'Search'],
      'menuButtons'
    );

    const leftColumnButtons = new Buttons(
      majorDiv,
      ['a', 'b', 'c', 'd', 'e'],
      ['a', 'b', 'c', 'd', 'e'],
      'three'
    );

    const rightColumnButtons = new Buttons(
      majorDiv,
      ['f', 'g', 'h', 'i', 'j'],
      ['f', 'g', 'h', 'i', 'j'],
      'four'
    );

    const leftMiddleButtons = new Buttons(
      majorDiv,
      ['Appointment', 'History', 'About Us', 'Subscription'],
      ['Appointment', 'History', 'About Us', 'Subscription'],
      'one'
    );

    const rightMiddleButtons = new Buttons(
      majorDiv,
      ['Appointment', 'History', 'About Us', 'Subscription'],
      ['Appointment', 'History', 'About Us', 'Subscription'],
      'two'
    );
  }

  render() {
    return (
      <div className="appParent">
        <div id="topBar">
          <div className="topBarWrapper">{/* Buttons will be added here dynamically */}</div>
        </div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload LOL.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
        <div className="major">
          {/* Buttons will be added here dynamically */}
        </div>
      </div>
    );
  }
}

export default App;
