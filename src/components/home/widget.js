import React from 'react';

export default class extends React.Component {
  
  render(){
    let {icon, description, temp, temp_feel: feel, wind, humidity: hum, pressure, ...other} = this.props.data;

    return(
      <>
        <div className="widget fs-5">
          <div className="widget__main d-flex justify-content-center align-items-center">
            <span className="fs-1 me-2">{(temp - 273).toFixed(1)}º</span>
            <img width="50" height="50" src={`https://openweathermap.org/img/wn/${icon}.png`} />
          </div>
          <div className="widget__description mb-4">
            <div className="fs-6">({description})</div>
          </div>
          {/* <div className="widget__row widget__temp">
            <div className="widget__key fs-6">Температура:</div>
            <div className="widget__val">{(temp - 273).toFixed(1)} ºC</div>
          </div> */}
          <div className="widget__row widget__feel">
            <div className="widget__key fs-6">Ощущается как:</div>
            <div className="widget__val">{(feel - 273).toFixed(1)}º</div>             
          </div>
          <div className="widget__row widget__wind">
            <div className="widget__key fs-6">Ветер: </div>
            <div className="widget__val">{wind.toFixed(2)} м/с</div>            
            </div>
          <div className="widget__row widget__hum">
            <div className="widget__key fs-6">Влажность воздуха:</div>
            <div className="widget__val">{hum}%</div>             
          </div>
          <div className="widget__row widget__pressure">
            <div className="widget__key fs-6">Давление: </div>
            <div className="widget__val">{pressure} мм рт. ст.</div>            
          </div>
        </div>
        
      </>
    )
  }
}