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
    this.setState(prevState => calculate(prevState, buttonName));
  };

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="App">
        <Display operation={operation || ' '} result={next || total || '0'} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
