import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { getHeroesById } from '../../selectors/getHeroeById';

export const HeroeScreen = () => {
   const { heroeId } = useParams();

   const hero = getHeroesById(heroeId);

   if (!hero) {
      return <Redirect to='/' />;
   }

   const { superhero, publisher, alter_ego, first_appearance, characters } = hero;

   console.log(hero);

   return (
      <div>
         <h1>Heroe Screen</h1>
      </div>
   );
};
