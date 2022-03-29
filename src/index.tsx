import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'

class Header extends React.Component {

  render() {
    return (
      <Navbar className="navbar">
        <button id="menuButton" onClick={() => alert("You pressed the menu button")}>
          <img src="menuIcon.svg" />
        </button>
        <Navbar.Brand href="https://www.marvel.com/">
          <img
            src="marvel.ico"
            id="brandImage"
          />

        </Navbar.Brand>
      </Navbar>
    )
  }
}

class Container extends React.Component {
  render() {
    return (
      <h1>container</h1>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Container />
      </div>
    );
  }
}

ReactDOM.render(
    <App />,
    document.getElementById('root'), //root DOM node
  );