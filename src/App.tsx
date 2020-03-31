import React from 'react';
import Navigation from './layout/Navigation';
import Header from './layout/Header';
import Work from './layout/Work';
import Education from './layout/Education';
import AboutMe from './layout/AboutMe';
import Contacts from './layout/Contacts';
import Footer from './layout/Footer';
import './static/styles/main.scss';

const App = () => (
  <div className={'App'}>
    <Navigation/>
    <Header/>
    <Work/>
    <hr/>
    <Education/>
    <hr/>
    <AboutMe/>
    <hr/>
    <Contacts/>
    <Footer/>
  </div>
);

export default App;
