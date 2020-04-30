import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { weather as config} from '../config/weather';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

   getWeather(weather) {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${weather.city}&units=imperial&appid=${config.apiKey}`)

  }
}
