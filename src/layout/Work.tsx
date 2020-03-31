import React from 'react';
import { getIcon } from '../utils/imageUtils';
import t from '../utils/translator';
import work from '../static/data/work.json';

type Workplace = {
  key: string,
  name: string,
  technologies: string[],
  time: string
};

const Work = () => {
  const getWorkplace = (workplace: Workplace) => (
    <div className={ 'box' }>
      <div>
        <h4 className={'box__title'}>{ workplace.name }</h4>
        <p className={'box__time'}>{ workplace.time }</p>
      </div>
      <p>{ t(`work.places.${workplace.key}.description`) }</p>
      <div className={'box__footer'}>
        { workplace.technologies.map((technology: string) => getIcon(technology)) }
      </div>
    </div>
  );

  return (
    <section>
      <h3>{ t('work.title') }</h3>

      <div className={ 'grid' }>
        <div className={'box box--new'}>
          <h4>{ t('work.new.title') }</h4>
          <p>{ t('work.new.description') }</p>
          <p>{ t('email') }: <a href={'mailto:katre.metsvahi@gmail.com'}>katre.metsvahi@gmail.com</a></p>
          <p>{ t('phone') }: <a href={'tel:+372-58046754'}>+372 58046754</a></p>
        </div>

        { getWorkplace(work.ismith) }
        { getWorkplace(work.codeyra) }
        { getWorkplace(work.icefire) }
        { getWorkplace(work.telia) }
        { getWorkplace(work.krediidipank) }
      </div>
    </section>
  );
};

export default Work;