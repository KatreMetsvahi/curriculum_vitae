import React from 'react';
import Nav from './layout/Nav';
import Header from './layout/Header';
import Work from './layout/Work';
import Education from './layout/Education';
import AboutMe from './layout/AboutMe';
import Contacts from './layout/Contacts';
import Footer from './layout/Footer';
import './static/styles/main.scss';
import { useTranslation } from 'react-i18next';

const App = () => {
  const { i18n } = useTranslation();

  return (
    <div
      className={'App'}
      data-lang={i18n.language}
    >
      <Nav/>
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
};

export default App;
