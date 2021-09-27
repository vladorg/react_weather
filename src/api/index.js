import request from "./request";


export function getIp() {
  return request('https://ipapi.co/json/')
}


export function getLoc(ip) {
  return request(`https://ipwhois.app/json/${ip}?lang=ru`)
}

export function getCoords(text, level) {
  return request(`https://api.visicom.ua/data-api/5.0/ru/geocode.json?categories=adm_level${level}&country=ua&text=${text}&key=19f8456f7e65d006b4aae48c2d0f59cd`)
}


export function getInfo(lat, lon) {
  return request(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&lang=ru&appid=888f056213c631b8f8677ca3bfbbd23b`)
}