import React from 'react';
import Design from '../assets/pattern-graphic-design.svg';
import UI from '../assets/pattern-ui-ux.svg';
import Apps from '../assets/pattern-apps.svg';
import Illustrations from '../assets/pattern-illustrations.svg';
import Photography from '../assets/pattern-photography.svg';
import Motion from '../assets/pattern-motion-graphics.svg';

const Pattern = (props) => {
  const patterns = {
    'Graphic Design': Design,
    'UX/UI': UI,
    Apps: Apps,
    Illustrations: Illustrations,
    Photography: Photography,
    'Motion Graphics': Motion,
  };

  return (
    <div
      className={`flex min-h-[11.375rem] flex-col justify-between rounded-lg p-6 ${props.color} ${props.styles}`}
    >
      <img
        src={patterns[props.pattern]}
        alt={props.pattern + ' background'}
        className="ml-auto"
      ></img>
      <p className="text-2xl text-white">{props.pattern}</p>
    </div>
  );
};

export default Pattern;
