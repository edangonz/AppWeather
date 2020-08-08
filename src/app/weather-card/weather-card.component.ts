import { Component, OnInit, Input } from '@angular/core';
import { Weather } from 'src/structures/weather.structure';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {

  @Input() weather : Weather;

  constructor() { }

  ngOnInit(): void {
  }

  returnDayWeek(value){
    switch(value){
      case 0:
        return "SUN";
      case 1:
        return "MON";
      case 2:
        return "TUE";
      case 3:
        return "WED";
      case 4:
        return "THU";
      case 5:
        return "FRI";
      case 6:
        return "SAT";
    }
  }

}
