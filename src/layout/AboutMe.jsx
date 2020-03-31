import React from 'react';
import t from '../utils/translator';

const AboutMe = () => {
  return (
    <section
      className={'about-me'}
      id={'about-me'}
    >
      <h3>{ t('aboutMe.title') }</h3>

      <div className={'grid'}>
        <div className={'box box--with-icon'}>
          <i className={'fas fa-star box__icon box__icon--yellow'}/>
          <p>{ t('aboutMe.work') }</p>
        </div>

        <div className={'box box--with-icon'}>
          <i className={'fas fa-heart box__icon box__icon--red'}/>
          <p>{ t('aboutMe.passion.part1') }</p>
          <p>{ t('aboutMe.passion.part2') }</p>
        </div>

        <div className={'box box--with-icon'}>
          <i className={'fas fa-biking box__icon box__icon--blue'}/>
          <p>{ t('aboutMe.hobbies') }</p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;