import React from 'react';

import Display from './Display.jsx'
import ButtonPanel from './ButtonPanel.jsx'

class App extends React.Component {
    state = {
      result: 0,
    }
  render(){
    const { result } = this.state;
      return (
        <div className="App">
          <Display result={ result.toString() }/>
          <ButtonPanel />
        </div>
      );
    }
  }

export default App;
