import React from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { heroes } from '../../data/heroes';
import { useForm } from '../../hooks/useForm';
import { HeroeCard } from '../heroes/HeroeCard';

export const SearchScreen = ({ history }) => {
   const location = useLocation(); //permite obtener los parametros de la url
   const { q = '' } = queryString.parse(location.search);

   const heroesFiltered = heroes;

   const [formValues, handleInputChange] = useForm({
      SearchText: ''
   });

   const { SearchText } = formValues;

   const handleSearch = (e) => {
      e.preventDefault();
      history.push(`?q=${SearchText}`);
   };

   return (
      <div>
         <h1>Search Screen</h1>
         <hr />

         <div className='row'>
            <div className='col-5'>
               <h4>Search Form</h4>
               <hr />

               <form>
                  <input
                     autoComplete='off'
                     type='text'
                     placeholder='Find your hero'
                     className='form-control'
                     name='SearchText'
                     value={SearchText}
                     onChange={handleInputChange}
                  />
                  <button
                     type='submit'
                     className='btn btn-outline-primary btn-block m1'
                     onClick={handleSearch}
                  >
                     Search...
                  </button>
               </form>
            </div>
            <div className='col-7'>
               <h4>Results</h4>
               <hr />
               {heroesFiltered.map((hero) => (
                  <HeroeCard key={hero.id} {...hero} />
               ))}
            </div>
         </div>
      </div>
   );
};
