import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { routesList } from '~/router';

import Header from '~c/header';
import Footer from '~c/footer';

export default class extends React.Component {

  render() {
    return (

      <Router>

        <Header/>

        <Switch>
          {routesList}         
        </Switch>

        <Footer/>

      </Router>

    )
  }
}
