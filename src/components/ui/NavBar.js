import React, { useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const NavBar = () => {
   const {
      user: { name },
      dispatch
   } = useContext(AuthContext);

   const history = useHistory(); //este hook permite acceder a la url actual para hacer un redireccionamiento
   //sin tener que pedir el history mediante props, teniendo asi un componente mas limpio

   const handleLogout = () => {
      dispatch({
         type: types.logout
      });

      history.replace('/login');
   };

   return (
      <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
         <Link className='navbar-brand' to='/'>
            Asociations
         </Link>

         <div className='navbar-collapse'>
            <div className='navbar-nav'>
               <NavLink
                  activeClassName='active'
                  className='nav-item nav-link'
                  exact
                  to='/marvel'
               >
                  Marvel
               </NavLink>

               <NavLink
                  activeClassName='active'
                  className='nav-item nav-link'
                  exact
                  to='/dc'
               >
                  DC
               </NavLink>
               <NavLink
                  activeClassName='active'
                  className='nav-item nav-link'
                  exact
                  to='/search'
               >
                  Search
               </NavLink>
            </div>
         </div>

         <div className='navbar-collapse collapse w-100 order-3 dual-collapse2'>
            <ul className='navbar-nav ml-auto'>
               <span className='nav-item nav-link text-info'>{name}</span>
               <button className='nav-item nav-link btn bg-dark' onClick={handleLogout}>
                  Logout
               </button>
            </ul>
         </div>
      </nav>
   );
};
