import React from 'react';
import { getRandomNumber } from '../utils/numberUtils';
import { getArrayOfEmptyItems } from '../utils/arrayUtils';

const CLOUD_GROUP_COUNT = 4;

const Clouds = () => {
    const cloudCount = Math.ceil(window.innerWidth / (100 * CLOUD_GROUP_COUNT));
    const cloudGroups = getArrayOfEmptyItems(CLOUD_GROUP_COUNT);

    const generateCloud = (group, index) => (
        <div
            className={'cloud'}
            key={group * CLOUD_GROUP_COUNT + index}
            style={{
                animationDelay: group === 0 ? 0 : `${getRandomNumber(10 * (group - 1), 10 * group)}s`,
                animationDuration: `${getRandomNumber(30, 90)}s`,
                top: `${getRandomNumber(10, 60)}%`,
                transform: `scale(.${getRandomNumber(1, 6)})`
            }}
        />
    );

    return cloudGroups.map((_, group)=> getArrayOfEmptyItems(cloudCount).map((_, index) => generateCloud(group, index)));
};

export default Clouds;