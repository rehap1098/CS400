import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service'
import {FormBuilder, FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Weather in Lakeland,FL';
  city: FormControl = new FormControl("lakeland");

  weather: any;


  constructor(private weather: WeatherService, private form: FormBuilder) {
  }

  getWeather() {

    this.weather.getWeather(this.weather).subscribe(
      response => {
        this.weather = response['current']['temp'];
      }

    )
  }
}
