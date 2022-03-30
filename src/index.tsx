import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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



class CharactersGrid extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
          1
          </Col>
          <Col>
          2
          </Col>
          <Col>3</Col>
          <Col>4</Col>
          <Col>5</Col>
        </Row>
      </Container>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <CharactersGrid />
      </div>
    );
  }
}

ReactDOM.render(
    <App />,
    document.getElementById('root'), //root DOM node
  );