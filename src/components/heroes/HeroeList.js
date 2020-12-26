import React from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';

export const HeroeList = ({ publisher }) => {
   const heroes = getHeroesByPublisher(publisher);
   return (
      <ul>
         {heroes.map((heroe) => (
            <li key={heroe.id}> {heroe.superhero}</li>
         ))}
      </ul>
   );
};
