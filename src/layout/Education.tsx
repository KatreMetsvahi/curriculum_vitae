import React from 'react';
import { getLogo } from '../utils/imageUtils';
import t from '../utils/translator';
import education from '../static/data/education.json';

type Education = {
  key: string,
  logo: string,
  time: string
};

const Ecucation = () => {
  const getEducation = (education: Education) => (
    <div className={'education'}>
      <h4>{ t(`education.places.${education.key}.name`) }</h4>
      <p className={'education__time'}>{ education.time }</p>
      <p>{ t(`education.places.${education.key}.description`) }</p>
      { getLogo(education.logo) }
    </div>
  );

  return (
    <section>
      <h3>{ t('education.title') }</h3>

      { getEducation(education.ttuMasters) }
      { getEducation(education.ttuBachelors) }
      { getEducation(education.reaalkool) }
    </section>
  );
};

export default Ecucation;