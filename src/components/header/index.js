import React from "react";
import {navList, routesMap} from '~/router';
import { withRouter } from 'react-router-dom';

function Header(props) {
  return (
    <div className="header bg-dark bg-gradient">
      <div className="container">
        <div className="header__inner d-flex justify-content-between align-items-center pt-2 pb-2">
          <a className="logo text-light fs-2" onClick={() => props.history.push(routesMap.home)}>SuperSite.com</a>
          <div className="nav">
            {navList}
          </div>          
        </div>
      </div>
    </div>
  )
}



export default withRouter(Header);