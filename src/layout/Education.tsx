import React from 'react';
import School from '../components/School';
import { translator as t } from '../utils/translationUtils';
import education from '../static/data/education.json';

const Education = () => (
  <section id={'education'}>
    <h3>{ t('education.title') }</h3>

    <School data={education.ttuMasters}/>
    <School data={education.ttuBachelors}/>
    <School data={education.reaalkool}/>
  </section>
);

export default Education;