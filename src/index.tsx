import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Header extends React.Component {
  render() {
    return (
      <h1>header</h1>
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