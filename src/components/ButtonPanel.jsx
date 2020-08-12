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

  const color = ['#F5913E', '#EOEOEO'];

  const styleColor = (btnName) =>
    ['/', 'X', '-', '+', '='].includes(btnName) ? color[0] : color[1];

  return (
    <div className="calculator-board">
      {Object.keys(group).map((key) => {
        return group[key].map((btnName) => {
          return (
            <Button
              color={styleColor(btnName)}
              wide={btnName === '0'}
              key={btnName}
              btnName={btnName}
            />
          );
        });
      })}
    </div>
  );
};

export default ButtonPanel;
