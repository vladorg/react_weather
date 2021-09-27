import React from 'react';

export default function() {
  return (
    <div className="container">
      <div className="content">
        <div className="fs-1">О программе</div>
        <div className="description mt-2">
          <p>Программа прогноза погоды.</p>
          <p>Автор: Владислав Пшеничный.</p>
          <p className="fs-3 mt-4">Используемые технологии: </p>
          <ul className="list-group list-group-flush mt-2">
            <li className="list-group-item">HTML/CSS (SASS)</li>
            <li className="list-group-item">Javascript</li>
            <li className="list-group-item">React (mobx)</li>  
            <li className="list-group-item">Bootstrap</li>
            <li className="list-group-item">Webpack</li>
          </ul>
          <p className="fs-3 mt-2">Api:</p>
          <ul className="list-group list-group-flush mt-2">
            <li className="list-group-item">Ipapi</li>
            <li className="list-group-item">Ipwhois</li>
            <li className="list-group-item">Visicom</li>  
            <li className="list-group-item">Openweathermap</li>
          </ul>
        </div>          
      </div>
    </div>
  )
}