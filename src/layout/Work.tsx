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
  const createWorkplace = (workplace: Workplace) => (
    <div className={ 'workplace' }>
      <div>
        <h4 className={'workplace__title'}>{ workplace.name }</h4>
        <p className={'workplace__time'}>{ workplace.time }</p>
      </div>
      <p>{ workplace.description }</p>
      <div className={'workplace__icons'}>
        { workplace.technologies.map((technology: string) => getIcon(technology)) }
      </div>
    </div>
  );

  return (
    <section>
      <h3>Minu töökogemused</h3>

      <div className={ 'grid' }>
        <div className={'workplace workplace--new'}>
          <h4>Minu tuleviku töö</h4>
          <p>Kui oled huvitatud koostööst minuga, siis võta julgesti ühendust!</p>
          <p>Email: <a href="mailto:katre.metsvahi@gmail.com">katre.metsvahi@gmail.com</a></p>
          <p>Telefon: <a href="tel:+372-58046754">+372 58046754</a></p>
        </div>

        { createWorkplace(workplaces.iSmith) }
        { createWorkplace(workplaces.codeyra) }
        { createWorkplace(workplaces.icefire) }
        { createWorkplace(workplaces.telia) }
        { createWorkplace(workplaces.krediidipank) }
      </div>
    </section>
  );
};

export default Work;