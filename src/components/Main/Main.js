import React from 'react';
import './Main.css';
import '../Animal/Animal.css';

import background from './background.png';
import Animal from '../Animal/Animal.js';
import { animals } from '../../data.js';

export default function Main() {
  return (
    <div className="main" style={{ backgroundImage: `url(${background})` }}>
      <main />
      {animals.map((item) => (<Animal key={item.name} {...item} />))}
    </div>
  );
}

