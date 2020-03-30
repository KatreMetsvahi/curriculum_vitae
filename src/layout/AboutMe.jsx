import React from 'react';
import aboutme from '../static/data/aboutme.json';

const AboutMe = () => {
  return (
    <section className={'about-me'}>
      <h3>Minust</h3>

      <div className={'grid'}>
        <div className={'box box--with-icon'}>
          <i className="material-icons box__icon">star</i>
          <p>{ aboutme.intro }</p>
        </div>

        <div className={'box box--with-icon'}>
          <i className="material-icons box__icon">favorite</i>
          <p>{ aboutme.passion }</p>
        </div>

        <div className={'box box--with-icon'}>
          <i className="material-icons box__icon">sports_tennis</i>
          <p>{ aboutme.hobbies }</p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;