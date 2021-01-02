import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { heroes } from '../../data/heroes';
import { useForm } from '../../hooks/useForm';
import { HeroeCard } from '../heroes/HeroeCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {
   const location = useLocation(); //permite obtener los parametros de la url
   const { q = '' } = queryString.parse(location.search);

   const [formValues, handleInputChange] = useForm({
      SearchText: q
   });

   const { SearchText } = formValues;

   const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

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
                     className='btn btn-outline-primary btn-block mt-1 mb-1'
                     onClick={handleSearch}
                  >
                     Search...
                  </button>
               </form>
            </div>
            <div className='col-7'>
               <h4>Results</h4>
               <hr />

               {q === '' && <div className='alert alert-info'>Search a hero</div>}

               {(q !== '') & (heroesFiltered.length === 0) && (
                  <div className='alert alert-danger'>There is no a hero with {q}</div>
               )}

               {heroesFiltered.map((hero) => (
                  <HeroeCard key={hero.id} {...hero} />
               ))}
            </div>
         </div>
      </div>
   );
};
