import { Component } from '@angular/core';
import {WEATHER1} from "./weather";
import {WEATHER} from "./JSON DATA";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'REHAS PROBLEM SET 7';
  weather = WEATHER;
  private selectedCity: WEATHER1;

  selectCity(city: WEATHER1) {
    this.selectedCity = city;
  }
}
