import React from 'react';
import Workplace from '../components/Workplace';
import WorkplaceNew from '../components/WorkplaceNew';
import { translator as t } from '../utils/translationUtils';
import work from '../static/data/work.json';

const Work = () => (
  <section id={'work'}>
    <h3>{ t('work.title') }</h3>

    <div className={ 'grid' }>
      <WorkplaceNew/>

      <Workplace data={work.ismith}/>
      <Workplace data={work.codeyra}/>
      <Workplace data={work.icefire}/>
      <Workplace data={work.telia}/>
      <Workplace data={work.krediidipank}/>
    </div>
  </section>
);

export default Work;