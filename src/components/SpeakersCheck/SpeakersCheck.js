import React  from 'react';

import { Slider } from 'antd';

import './SpeakersCheck.scss'


const SpeakersCheck = () => {
    const marks = {
        0: '0',
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
        10: '10',
    };
    return (
        <div className="speakersCheck">
            <h3>Speakers</h3>
            <Slider max={10} marks={marks} step={1} defaultValue={7} />
        </div>
    );
};
export default SpeakersCheck;