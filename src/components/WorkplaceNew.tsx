import React from 'react';
import t from '../utils/translator';

const WorkplaceNew = () => (
  <div className={'box box--new'}>
    <h4>{ t('work.new.title') }</h4>
    <p>{ t('work.new.description') }</p>
    <p>{ t('email') }: <a href={'mailto:katre.metsvahi@gmail.com'}>katre.metsvahi@gmail.com</a></p>
    <p>{ t('phone') }: <a href={'tel:+372-58046754'}>+372 58046754</a></p>
  </div>
);

export default WorkplaceNew;