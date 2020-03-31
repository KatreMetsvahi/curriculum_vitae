import React from 'react';
import { translator as t } from '../utils/translationUtils';

const Contacts = () => {
  return (
    <section
      className={'contacts'}
      id={'contacts'}
    >
      <h3>{ t('contacts.title') }</h3>
      <p>{ t('contacts.description') }:</p>

      <div className={'contacts__container'}>
        <i className={'fas fa-envelope contacts__icon'}/>
        <a
          className={'contacts__link'}
          href={'mailto:katre.metsvahi@gmail.com'}
        >
          katre.metsvahi@gmail.com
        </a>
      </div>

      <div className={'contacts__container'}>
        <i className={'fas fa-phone-alt contacts__icon'}/>
        <a
          className={'contacts__link'}
          href={'tel:+372-58046754'}
        >
          +372 58046754
        </a>
      </div>

      <div className={'contacts__container'}>
        <i className={'fab fa-linkedin-in contacts__icon'}/>
        <a
          className={'contacts__link'}
          href={'https://www.linkedin.com/in/katremetsvahi/'}
          rel={'noopener noreferrer'}
          target={'_blank'}
        >
          linkedin.com/in/katremetsvahi
        </a>
      </div>

      <p>{ t('contacts.codeInfo') }:</p>
      <a
        className={'contacts__github'}
        href={'https://github.com/KatreMetsvahi/curriculum_vitae'}
        rel={'noopener noreferrer'}
        target={'_blank'}
      >
        <i className={'fab fa-github'}/>
      </a>
    </section>
  );
};

export default Contacts;