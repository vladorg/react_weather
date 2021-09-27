import React from 'react';

import Home from '~p/home';
import About from '~p/about';
import Error404 from '~p/404';

const ROOT = '/';
//const ROOT = '/react-weather/';

const routes = [
  {
    name: 'home',
    path: `${ROOT}`,
    component: () => <Home/>,
    exact: true,
    menu: true,
    placeholder: 'Главная'
  },
  {
    name: 'about',
    path: `${ROOT}about`,
    component: () => <About/>,
    exact: true,
    menu: true,
    placeholder: 'О программе'
  },


  
  {
    name: '404',
    path: '**',    
    component: () => <Error404/>,
    exact: false,
    menu: false,
    placeholder: null
  }
]


export default routes;