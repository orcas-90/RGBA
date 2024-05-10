import { cnRGBA } from './RGBA.classname';
import { useState, type MouseEvent, useEffect } from 'react';
//import { uid } from 'uid';

import type {
  ChangeEvent,
  DragEventHandler,
  FC,
  MouseEventHandler,
} from 'react';

import './RGBA.css';
import { Article } from './Article';

let r: string;
let g: string;
let b: string;
let a: string;
let color: string;

const RGBA= () => {

  const [valueAlfa, setValueAlfa] = useState('0');
  const [valueRed, setValueRed] = useState('0');
  const [valueGreen, setValueGreen] = useState('0');
  const [valueBlue, setValueBlue] = useState('0');
  const [stateColor,setStateColor] = useState('rgba(124,76,222,0.8)')


  useEffect(() => {
    console.log(stateColor);
    setStateColor(color)

  }, [stateColor,valueAlfa,valueBlue,valueGreen,valueRed]);

  color =  'rgba('+r +',' + g + ','+ b +',' + a +')'


  const handleChangeRed = (event: ChangeEvent<HTMLInputElement>) => {
    setValueRed(event.target.value);
    r = valueRed


  };

  const handleChangeGreen = (event: ChangeEvent<HTMLInputElement>) => {
    setValueGreen(event.target.value);
  g = valueGreen


  };
  const handleChangeBlue = (event: ChangeEvent<HTMLInputElement>) => {
    setValueBlue(event.target.value);
    b = valueBlue


  };
  const handleChangeAlfa = (event: ChangeEvent<HTMLInputElement>) => {
    setValueAlfa(event.target.value);
    a = valueAlfa


  };


  return (
    <div className={cnRGBA()}>
      <input className={cnRGBA('range')}
        type="range"
        name="red"
        min={0}
        max={255}
        step={1}
        onChange={handleChangeRed}
        value={valueRed}
      ></input>
      <label htmlFor="red"  style={{color: 'red'}}>red {valueRed}</label>
      <input className={cnRGBA('range')}
        type="range"
        name="green"
        min={0}
        max={255}
        step={1}
        onChange={handleChangeGreen}
        value={valueGreen}
      ></input>
      <label htmlFor="green"  style={{color: 'green'}}>green {valueGreen}</label>
      <input className={cnRGBA('range')}
        type="range"
        name="blue"
        min={0}
        max={255}
        step={1}
        onChange={handleChangeBlue}
        value={valueBlue}
      ></input>
      <label htmlFor="blue"  style={{color: 'blue'}}>blue {valueBlue}</label>
      <input className={cnRGBA('range')}
        type="range"
        name="alfa"
        min={0.0}
        max={1.0}
        step={0.1}
        onChange={handleChangeAlfa}
        value={valueAlfa}
        ></input>
      <label style={{color: 'white'}} htmlFor="alfa">alfa {valueAlfa}</label>
      <Article colorText={stateColor}></Article>
    </div>
  );
};

export { RGBA };
