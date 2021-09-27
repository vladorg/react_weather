import React from 'react';
import stores from '~s';

export default class extends React.Component {

  state = {
    cityWrite: '',
    cityes: []
  }

  change(e){
    this.setState({cityWrite: e.target.value});
  }

  search(){
    stores.homeStore.search(this.state.cityWrite)
      .then(result => {
        if (result) {
          this.setState({cityes: result});
        } else {
          this.setState({cityes: null});
        }
      })
  }


  render(){

    let cityesResult;

    if (this.state.cityes) {
      cityesResult = this.state.cityes.map((item, i) => {
        let {city} = item;
        return (
          <button 
            key={i} 
            className="list-group-item list-group-item-action list-group-item-success"
            onClick={() => stores.homeStore.customAccept(item)}
          >
            {city}
          </button>
        )
      });
    } else {
      cityesResult = 'Ничего не найдено...';
    }
    
    

    return(
      <>
        <div className="container">
          <div className="content text-center">
            <p className="fs-2">Укажите ваш город:</p>
            <div className="ms-auto d-flex me-auto w-50">
              <input
                className="form-control"
                value={this.state.cityWrite}
                onChange={e => this.change(e)}
              />
              <button className="ms-2 btn btn-success" onClick={() => this.search()}>Поиск</button>
            </div>
            <div className="result mt-2 ms-auto me-auto w-50 fs-5">
              {cityesResult}
            </div>            
          </div>
        </div>        
      </>
    )
  }
}