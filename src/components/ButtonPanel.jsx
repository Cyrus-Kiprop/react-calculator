import React from 'react';

// eslint-disable-next-line import/extensions
import Button from './Button.jsx';

const ButtonPanel = () => {
  const group = {
    one: ['AC', '+/-', '%', '/'],
    two: ['7', '8', '9', 'X'],
    three: ['4', '5', '6', '-'],
    four: ['1', '2', '3', '+'],
    five: ['0', '.', '='],
  };
  return (
    <div className="board">
      {Object.keys(group).map(key => group[key].map(btnName => <Button key={btnName} btnName={btnName} />))}
    </div>
  );
};

export default ButtonPanel;
