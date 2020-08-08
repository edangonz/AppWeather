import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subject, Observable} from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Coords } from 'src/structures/coords.structure';
import { Weather } from 'src/structures/weather.structure';
import { GeolocationService } from './geolocation.service';

@Injectable({
  providedIn: 'root'
})
export class CurrentWeatherService {

  public weatherSubject: Subject<any> = new Subject<any>();
  public weather$ : Observable<any>;

  endpoint: string = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http : HttpClient, private geolocationService : GeolocationService) {
    
    this.weather$ = this.weatherSubject.asObservable().pipe(

      map((data : any) => {
        let date = new Date(data.dt * 1000);

        let mainweather = data.weather[0];
        
        let weather : Weather = {
          name: data.name,
          cod: data.cod,
          temp: data.main.temp,
          ...mainweather,
          minMaxTemp: {
            month: date.getMonth(),
            date: date.getDate(),
            day: date.getDay(),
            year: date.getFullYear(),
            min: data.main.temp_min,
            max: data.main.temp_max
          },
          moreData :{
            wind: data.wind.speed
          }
        }

        return weather;
      }
    ));

    this.geolocationService.coords$.subscribe((coords) => {
      this.get(coords);
    });
  }

  //Esto es un metood que llama al servicio, weather.json es una peticion
  get(coords : Coords){
    let args : string = `?lat=${coords.lat}&lon=${coords.lon}&appid=${environment.key}&units=metric`;
    
    let url = this.endpoint + args;
    /*
    if(isDevMode){
      url = 'assets/weather.json'
    }
    */
    this.http.get(url).subscribe(this.weatherSubject);
  }

  //Subject

  // Observable
}
