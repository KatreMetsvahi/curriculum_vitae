import React from 'react';
import { getRandomNumber } from '../utils/numberUtils';
import { getArrayOfEmptyItems } from '../utils/arrayUtils';

const CLOUD_GROUP_COUNT = 4;

const Clouds = () => {
  const cloudCount = Math.ceil(window.innerWidth / 100);
  const cloudArray = getArrayOfEmptyItems(cloudCount);

  const generateCloud = (group: number, index: number): JSX.Element => (
    <div
      className={'cloud'}
      key={group * CLOUD_GROUP_COUNT + index}
      style={{
        animationDelay: group === 0 ? '0' : `${getRandomNumber(10 * (group - 1), 10 * group)}s`,
        animationDuration: `${getRandomNumber(30, 120)}s`,
        top: `${getRandomNumber(10, 80)}%`,
        transform: `scale(.${getRandomNumber(1, 8)})`
      }}
    />
  );

  return (
    <React.Fragment>
      {cloudArray.map((_, index) => generateCloud(index % CLOUD_GROUP_COUNT, index))}
    </React.Fragment>
  );
};

export default Clouds;