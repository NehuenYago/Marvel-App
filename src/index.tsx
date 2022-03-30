import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends React.Component {

  render() {
    return (
      <nav className="navbar">
        <button onClick={() => alert("You pressed the menu button")}>
          <img src="menuIcon.svg" />
        </button>
        <a href="https://www.marvel.com/" className="navbarLink">
          <img
            src="marvelLogo.png"
            id="navbarLogoImage"
          />
        </a>
      </nav>
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