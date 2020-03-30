import React from 'react';

const Contacts = () => {
  return (
    <section className={'contacts'}>
      <h3>Võta minuga ühendust</h3>
      <p>Kui eeltoodu sulle meeldis ja on soovi minuga koostööd teha, siis kirjuta</p>
      <a
        className={'link-block'}
        href='mailto:katre.metsvahi@gmail.com'>
        katre.metsvahi@gmail.com
      </a>
      <p>või helista mulle</p>
      <a
        className={'link-block'}
        href='tel:+372-58046754'
      >+372 58046754</a>
    </section>
  );
};

export default Contacts;