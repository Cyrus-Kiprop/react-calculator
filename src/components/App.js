import React from 'react';

// eslint-disable-next-line import/extensions
import Display from './Display.jsx';
// eslint-disable-next-line import/extensions
import ButtonPanel from './ButtonPanel.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      result: 0,
    };
  }

  render() {
    const { result } = this.state;
    return (
      <div className="App">
        <Display result={result.toString()} />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
