import { Component, OnInit } from '@angular/core';
import { ForecastService } from '../services/forecast-service.service';
import { showUpStagger } from '../animations/showUp.animation';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.sass'],
  animations: [showUpStagger]
})
export class ForecastComponent implements OnInit {

  constructor(public forecastService: ForecastService) { }

  ngOnInit(): void {
  }

}
