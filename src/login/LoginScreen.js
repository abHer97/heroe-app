import React, { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { types } from '../types/types';

export const LoginScreen = ({ history }) => {
   const { dispatch } = useContext(AuthContext);

   const handleClick = () => {
      // history.push('/'); agrega la ruta de parametro al historial de navegacion
      // history.replace('/'); //borra el historial e inserta la ruta del parametro, haciendo que no exista historial de navegacion y la ruta otorgada sera la 'unica' visitada
      dispatch({
         type: types.login,
         payload: {
            name: 'Fernando'
         }
      });

      history.replace('/');
   };

   return (
      <div className='container mt-5'>
         <h1>Login</h1>
         <hr />
         <button className='btn btn-primary' onClick={handleClick}>
            Login
         </button>
      </div>
   );
};
