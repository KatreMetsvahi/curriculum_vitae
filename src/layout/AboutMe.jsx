import React from 'react';
import aboutme from '../static/data/aboutme.json';

const AboutMe = () => {
  return (
    <section className={'about-me'}>
      <h3>Minust endast</h3>

      <div className={'grid'}>
        <div className={'box box--with-icon'}>
          <i className="material-icons box__icon box__icon--yellow">star</i>
          <p>{ aboutme.intro }</p>
        </div>

        <div className={'box box--with-icon'}>
          <i className="material-icons box__icon box__icon--red">favorite</i>
          <p>{ aboutme.passion1 }</p>
          <p>{ aboutme.passion2 }</p>
        </div>

        <div className={'box box--with-icon'}>
          <i className="material-icons box__icon box__icon--blue">sports_tennis</i>
          <p>{ aboutme.hobbies }</p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;