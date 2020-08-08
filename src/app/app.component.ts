import { Component } from '@angular/core';
import { ForecastService } from './services/forecast-service.service';
import { GeolocationService } from './services/geolocation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather';

  //aqui estoy importanto y llamando a mi servicio para que se use
  //constructor(private forecastService : ForecastService){}
  constructor(public geolocationService : GeolocationService){}


  ngOnInit(){
    //this.forecastService.weather$.subscribe(console.log)
  }

}
