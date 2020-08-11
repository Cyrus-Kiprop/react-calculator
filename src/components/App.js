import React from 'react';
import calculate from '../logic/calculate';

// eslint-disable-next-line import/extensions
import Display from './Display.jsx';
// eslint-disable-next-line import/extensions
import ButtonPanel from './ButtonPanel.jsx';

const App = () => (
  <div className="App">
    <Display result="0" />
    <ButtonPanel />
  </div>
);

export default App;
