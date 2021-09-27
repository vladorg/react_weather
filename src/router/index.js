import React from 'react';
import {Route, NavLink} from 'react-router-dom';
import routes from './routes';


const routesList = routes.map(route => {
  return (
    <Route  
      key={route.name}
      path={route.path}
      component={route.component}
      exact={route.exact}
    />
  )
});

const navList = routes.map(route => {
  if (route.menu) {
    return (
      <NavLink 
        key={route.name}
        to={route.path}
        activeClassName="activeLink" 
        className="btn btn-success ms-2 me-2"
        exact
      >
        {route.placeholder}
      </NavLink>
    )
  }  
});

let routesMap = {};
routes.map(route => {
  routesMap[route.name] = route.path;
});


export {routesList, navList, routesMap};


