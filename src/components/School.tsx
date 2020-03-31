import React from 'react';
import { getLogo } from '../utils/imageUtils';
import t from '../utils/translator';

type School = {
  key: string,
  logo: string,
  time: string
};

const School = ({ data }: { data: School }) => (
  <div className={'school'}>
    <h4>{ t(`education.places.${data.key}.name`) }</h4>
    <p className={'school__time'}>{ data.time }</p>
    <p>{ t(`education.places.${data.key}.description`) }</p>
    { getLogo(data.logo) }
  </div>
);

export default School;