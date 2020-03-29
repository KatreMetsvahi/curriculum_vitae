import React from 'react';
import Header from './layout/Header';
import Work from './layout/Work';
import Education from './layout/Education';
import './styles/main.scss';

function App() {
  return (
    <div className="App">
      <Header/>
      <Work/>
      <hr/>
      <Education/>
    </div>
  );
}

export default App;
