import React from 'react';
import Header from './layout/Header';
import Work from './layout/Work';
import Education from './layout/Education';
import AboutMe from './layout/AboutMe';
import './styles/main.scss';

const App = () => (
  <div className={'App'}>
    <Header/>
    <Work/>
    <hr/>
    <Education/>
    <hr/>
    <AboutMe/>
  </div>
);

export default App;
