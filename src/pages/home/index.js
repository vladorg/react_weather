import React from 'react';
import {observer} from 'mobx-react';

import City from '~c/home/city';
import Info from '~c/home/info';
import Loader from '~c/loaders/default';
import ErrorLoad from '~c/errors/load';

import stores from '~s';


class Home extends React.Component {

  state = {
    loaded: null
  }

  componentDidMount(){
    stores.homeStore.init().then(res => {
      this.setState({loaded: res});
    }) 
  }

  render(){

    let {homeStore} = stores;

    if (this.state.loaded === null) {
      return <Loader/>
    }

    if (this.state.loaded === false) {
      return <ErrorLoad/>
    }

    if (homeStore.data.accept) {
      return <Info/>
    } else if (homeStore.data.checking) {
      return <City/>
    }

    return(
      <div className="container">
        <div className="content text-center">
          <div className="fs-3 mb-4 d-flex justify-content-center align-items-center">
            Ваш город  
            <div className="ms-1 fw-bold">{homeStore.data.city}</div>
            ?
          </div>
          <button className="btn btn-success btn-lg ms-2 me-2" onClick={() => homeStore.acceptWrite()}>Да</button>
          <button className="btn btn-success btn-lg ms-2 me-2" onClick={() => homeStore.customWrite()}>Нет</button>
        </div>
      </div>
    )
  }
}

export default observer(Home);