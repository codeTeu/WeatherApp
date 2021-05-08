import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class GetApiService {

  constructor(private http: HttpClient) { }
  
  private key: string = "898c9a34f3f25e07a8dc55a283e8464c";

  cityName: string = "Toronto";
  units: string = "metric";


  getWeather(city: string, isFchecked:boolean) {
    this.cityName = city;
    this.units= isFchecked ==false? "metric":"imperial";
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&appid=${this.key}&units=${this.units}
    `);
  }
}
