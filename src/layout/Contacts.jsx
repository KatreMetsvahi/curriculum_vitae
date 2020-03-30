import React from 'react';

const Contacts = () => {
  return (
    <section className={'contacts'}>
      <h3>Võta minuga ühendust</h3>
      <p>Kui peale eeltoodu lugemist tunned, et soovid minuga koostööd teha, siis võta ühendust:</p>

      <div className={'contacts__grid'}>
        <i className={'fas fa-envelope contacts__icon'}/>
        <a
          className={'contacts__link'}
          href={'mailto:katre.metsvahi@gmail.com'}
        >
          katre.metsvahi@gmail.com
        </a>

        <i className={'fas fa-phone-alt contacts__icon'}/>
        <a
          className={'contacts__link'}
          href={'tel:+372-58046754'}
        >
          +372 58046754
        </a>

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

      <p>Käesoleva CV koodi võib samuti leida Githubist:</p>
      <a
        className={'contacts__github'}
        href={'https://github.com/KatreMetsvahi/curriculum_vitae'}
        rel={'noopener noreferrer'}
        target={'_blank'}
      >
        <i className={'fab fa-github'} />
      </a>
    </section>
  );
};

export default Contacts;