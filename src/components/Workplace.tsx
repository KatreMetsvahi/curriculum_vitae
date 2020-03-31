import React from 'react';
import { translator as t } from '../utils/translationUtils';
import { getIcon } from '../utils/imageUtils';

type Workplace = {
  key: string,
  name: string,
  technologies: string[],
  time: string
};

const Workplace = ({ data }: { data: Workplace }) => (
  <div className={'box'}>
    <div>
      <h4 className={'box__title'}>{ data.name }</h4>
      <p className={'box__time'}>{ data.time }</p>
    </div>
    <p>{ t(`work.places.${data.key}.description`) }</p>
    <div className={'box__footer'}>
      { data.technologies.map((technology: string) => getIcon(technology)) }
    </div>
  </div>
);

export default Workplace;