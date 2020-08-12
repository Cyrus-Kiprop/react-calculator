import React from 'react';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';

// eslint-disable-next-line import/extensions
import Display from './Display.jsx';
// eslint-disable-next-line import/extensions
import ButtonPanel from './ButtonPanel.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state  = {
      total: null,
      next: null,
      operation: null
    }
  }
  render() {
      return (
        <div className="App">
          <Display result="0" />
          <ButtonPanel />
        </div>
      )
    }
}

export default App;
