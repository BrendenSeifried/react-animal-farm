import React from 'react';
//import animal from './animal.css';

//import { animals } from '../data.js';



export default function Animal({ name, says, top, left, type }) {
  return (
    <div className='animal' style={{ top, left }}>
      <img alt={name} src={`${process.env.PUBLIC_URL}/animals/${type}.svg`}/>
      <span className="name">{name}</span>
      <span>{says}</span>
    </div>
  );
}

// export default function Animal() {
//   return (
//     <>
//       {animals.map((animal) => (
//         <Animal key='' name={animal.name} type={animal.type} says={animal.says} top={animal.top} left={animal.left} />
//       ))}
//     </>
//   );
// }

//---------Left the above code to show how I was originally doing it until Josh helped me out 