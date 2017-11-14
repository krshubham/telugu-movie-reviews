import {join} from 'path';

const points = {
    'plus': 'Plus Points:-',
    'minus': 'Minus Points:-',
};

const fileDir = join(__dirname,'../../data/');
console.log(fileDir);

export {points, fileDir};