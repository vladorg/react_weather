import { makeObservable, makeAutoObservable, observable, computed, action } from 'mobx';
import * as api from '~/api';

class Home {

  constructor(stores) {
    let root = stores;

    makeAutoObservable(this)
    
  }

  data = {
    accept: false,
    checking: false
  }

  init(){
    return new Promise(res => {
      if (!localStorage.getItem('city')) {
        api.getIp()
          .then(data => {
            api.getLoc(data.ip)
              .then(data => {
                this.data.city = data.city;
                this.data.lat = data.latitude.toString();
                this.data.lon = data.longitude.toString();

                res(true);
              })
              .catch(err => res(false));
          })
          .catch(err => res(false))
      } else { 
  
        this.data.city = localStorage.getItem('city');
        this.data.lat = localStorage.getItem('lat');
        this.data.lon = localStorage.getItem('lon');
        this.data.accept = true;
  
        res(true);
      }
    })
        
  }

  acceptWrite(){
    localStorage.setItem('city', this.data.city);
    localStorage.setItem('lat', this.data.lat);
    localStorage.setItem('lon', this.data.lon);

    this.data.accept = true;

    console.log(this.data.accept);
  }

  customWrite(){
    this.data.checking = true;
  }

  change() {
    this.data.accept = false;
    this.data.checking = true;
  }

  customAccept(data) {
    let {city, lat, lon} = data;
    localStorage.setItem('city', city);
    localStorage.setItem('lat', lat);
    localStorage.setItem('lon', lon);

    this.data.city = city;
    this.data.lat = lat;
    this.data.lon = lon;
    this.data.accept = true;
  }

  search(text){
    return new Promise(resolve => {
      api.getCoords(text, 1)
        .then(data => {
          if (data.type) {
            resolve(coordObj(data));           
          } else {            
            api.getCoords(text, 2)
              .then(data => {
                if (data.type) {      
                  resolve(coordObj(data));  
                } else {
                  resolve(false);
                }
              })
          }
        })
    });
  }
}


export default Home;




function coordObj(data) {
  let result = [];

  if (data.features) {
    data.features.map(item => result.push({
      city: item.properties.admin_center || item.properties.name,
      lat: item.geo_centroid.coordinates[1].toString(),
      lon: item.geo_centroid.coordinates[0].toString()
    })); 
  } else if (data.properties) {
    result.push({
      city: data.properties.admin_center || data.properties.name,
      lat: data.geo_centroid.coordinates[1].toString(),
      lon: data.geo_centroid.coordinates[0].toString()
    });
  } else {
    return data;
  }

  return result;
}