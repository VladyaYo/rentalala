import React  from 'react';

import { Slider } from 'antd';

import './MicrophoneCheck.scss'


const MicrophoneCheck = () => {

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
        11: '11',
        12: '12',
        13: '13',
        14: '14',
        15: '15',
        16: '16',
        17: '17',
        18: '18',
        19: '19',
    };
    return (
        <div className="microphone">
            <h3>Microphone</h3>
            <Slider tooltipVisible={false} max={19} marks={marks} step={1} defaultValue={7} />
        </div>
    );
};
export default MicrophoneCheck;