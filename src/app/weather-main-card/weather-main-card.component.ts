import { Component, OnInit, Input} from '@angular/core';
import { Weather } from 'src/structures/weather.structure';

@Component({
  selector: 'app-weather-main-card',
  templateUrl: './weather-main-card.component.html',
  styleUrls: ['./weather-main-card.component.scss']
})
export class WeatherMainCardComponent implements OnInit {

  @Input() weather : Weather;

  constructor() { }

  ngOnInit(): void {
  }

  returnDayWeek(value){
    switch(value){
      case 0:
        return "Sunday";
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
    }
  }

  returnMonth(value){
    if(String(value).length == 1)
      return '0' + String(value)
    return value;
  }

}
