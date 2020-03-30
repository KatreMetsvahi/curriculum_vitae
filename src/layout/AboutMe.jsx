import React from 'react';
import aboutme from '../static/data/aboutme.json';

const AboutMe = () => {
  return (
    <section className={'about-me'}>
      <h3>Minust</h3>

      <p>{ aboutme.intro }</p>
      <p>{ aboutme.passion }</p>
      <p>{ aboutme.hobbies }</p>
    </section>
  );
};

export default AboutMe;