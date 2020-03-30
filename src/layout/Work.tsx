import React from 'react';
import { getIcon } from '../utils/imageUtils';
import workplaces from '../static/data/workplaces.json';

type Workplace = {
  description: string,
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
      <p>{ workplace.description }</p>
      <div className={'box__footer'}>
        { workplace.technologies.map((technology: string) => getIcon(technology)) }
      </div>
    </div>
  );

  return (
    <section>
      <h3>Minu töö&shy;kogemused</h3>

      <div className={ 'grid' }>
        <div className={'box box--new'}>
          <h4>Minu tuleviku töö</h4>
          <p>Kui oled huvitatud koostööst minuga, siis võta julgesti ühendust!</p>
          <p>Email: <a href='mailto:katre.metsvahi@gmail.com'>katre.metsvahi@gmail.com</a></p>
          <p>Telefon: <a href='tel:+372-58046754'>+372 58046754</a></p>
        </div>

        { getWorkplace(workplaces.iSmith) }
        { getWorkplace(workplaces.codeyra) }
        { getWorkplace(workplaces.icefire) }
        { getWorkplace(workplaces.telia) }
        { getWorkplace(workplaces.krediidipank) }
      </div>
    </section>
  );
};

export default Work;