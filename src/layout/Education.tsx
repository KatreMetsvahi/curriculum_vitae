import React from 'react';
import School from '../components/School';
import t from '../utils/translator';
import education from '../static/data/education.json';

const Education = () => (
  <section>
    <h3>{ t('education.title') }</h3>

    <School data={education.ttuMasters}/>
    <School data={education.ttuBachelors}/>
    <School data={education.reaalkool}/>
  </section>
);

export default Education;