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
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = buttonName => {
    const newState = { ...this.state };
    const { ...operationResult } = calculate(newState, buttonName);
    this.setState(operationResult);
  };

  render() {
    const { total, next } = this.state;
    return (
      <div className="App">
        <Display result={total || next || '0'} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
