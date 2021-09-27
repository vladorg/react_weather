import React from 'react';
import * as api from '~/api';

import Loader from '~c/loaders/default';
import Widget from './widget';

import stores from '~s';



export default class extends React.Component {

  state = {
    tab: 0,
    data: {
      current: null,
      daily: null
    },
    loaded: false
  }

  city = stores.homeStore.data.city;
  lat = stores.homeStore.data.lat;
  lon = stores.homeStore.data.lon;

  componentDidMount() {
    api.getInfo(this.lat, this.lon)
      .then(data => {
        let currentData = {
          icon: data.current.weather[0].icon,
          description: data.current.weather[0].description,
          temp: data.current.temp,
          temp_feel: data.current.feels_like,
          wind: data.current.wind_speed,
          humidity: data.current.humidity,
          pressure: data.current.pressure,
        }

        let dailyData = [];

        data.daily.map(item => {
          dailyData.push({
            icon: item.weather[0].icon,
            description: item.weather[0].description,
            temp: item.temp.day,
            temp_feel: item.feels_like.day,
            wind: item.wind_speed,
            humidity: item.humidity,
            pressure: item.pressure,
          });
        });

        

        this.setState({
          data: {
            ...this.state.data,
            current: {...currentData},
            daily: {...dailyData}
          },
          loaded: true
        });
      })
  }

  render(){    

    if (!this.state.loaded) {
      return <Loader/>
    }

    let tabs = [
      {name: 'Сегодня', id: 0},
      {name: 'Завтра', id: 1},
      {name: 'Послезавтра', id: 2}
    ];

    let buttons = tabs.map(el => {
      return (
        <li key={el.id} className="nav-item">
          <a 
            className={`nav-link btn btn-warning text-success ${el.id == this.state.tab ? "active" : null}`} 
            key={el.id} onClick={() => this.setState({tab: el.id})} disabled={el.id == this.state.tab}
          >
            {el.name}
          </a>
        </li>        
      )
    });

    let widgets = tabs.map(el => {
      return (
        <div key={el.id} hidden={this.state.tab != el.id}>
          <Widget data={el.id ? this.state.data.daily[el.id] : this.state.data.current}/>
        </div>
      )
    })

    
    return(
      <>
        <div className="container">
          <div className="content text-center w-50 ms-auto me-auto">
            <div className="info">

              <div className="info__header mb-4 d-flex justify-content-center align-items-center">
                <div className="info__city fs-5">Вы выбрали: {this.city}</div>
                <button className="btn btn-success ms-4" onClick={() => stores.homeStore.change()}>Изменить</button>
              </div>

              <div className="info__buttons mb-4">
                <ul className="nav nav-tabs justify-content-center">
                  {buttons}
                </ul>                 
              </div>

              <div className="info__widgets">
                {widgets}
              </div>            
            </div>
          </div>
        </div>
      </>
    )
  }
}