import React from 'react';
import logo from './calculator-96.png';
import './App.css';

import Display from './Display.jsx'
import ButtonPanel from './ButtonPanel.jsx'

class App extends React.Component() {
  constructor(props) {
    super(props);
  }
  render(){
      return (
        <div className="App">
          <Display />
          <ButtonPanel />
        </div>
      );
    }
  }

export default App;
