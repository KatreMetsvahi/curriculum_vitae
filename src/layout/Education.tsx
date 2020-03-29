import React from 'react';
import education from '../static/data/education.json';

type Education = {
  description: string,
  name: string,
  time: string
};

const Ecucation = () => {
  const getEducation = (education: Education) => (
    <div className={'education'}>
      <h4>{ education.name}</h4>
      <p className={'education__time'}>{ education.time }</p>
      <p>{ education.description }</p>
    </div>
  );

  return (
    <section>
      <h3>Minu haridus&shy;teekond</h3>

      { getEducation(education.ttuMasters) }
      { getEducation(education.ttuBachelors) }
      { getEducation(education.reaalkool) }
    </section>
  );
};

export default Ecucation;