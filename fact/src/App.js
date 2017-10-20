import React, { Component } from 'react';
import Routes from './routes';
import {Container} from 'semantic-ui-react';
import './App.css';

class App extends Component {
  render() {
    return (
      <Container>
        <Routes/>
      </Container>
    );
  }
}
export default App;
