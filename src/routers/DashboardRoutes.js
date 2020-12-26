import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { NavBar } from '../components/ui/NavBar';
import { HeroeScreen } from '../components/heroes/HeroeScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { DcScreen } from '../components/dc/DcScreen';

export const DashboardRoutes = () => {
   return (
      <>
         <NavBar />

         <div className='container'>
            <Switch>
               <Route exact path='/marvel' component={MarvelScreen} />
               <Route exact path='/dc' component={DcScreen} />
               <Route exact path='/hero/:heroeid' component={HeroeScreen} />

               <Redirect to='/marvel' />
            </Switch>
         </div>
      </>
   );
};
