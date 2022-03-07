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


// export default function Main() {
//   return (
//     <div className="main" style={{ backgroundImage: `url(${background})` }}>
//       <main />
//     </div>
//   );
// }


// import { animals } from '../data.js';

// export default function Animal() {
//   return (
//     <>
//       {animals.map((animal) => (
//         <Animal key='' name={animal.name} type={animal.type} says={animal.says} top={animal.top} left={animal.left} />
//       ))}
//     </>
//   );
// }

