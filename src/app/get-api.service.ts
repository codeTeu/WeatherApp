import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class GetApiService {

  constructor(private http: HttpClient) { }

  cityName: string = "Toronto";
  units: string = "metric";

  private key: string = "898c9a34f3f25e07a8dc55a283e8464c";

  getWeather(city: string) {
    this.cityName = city;
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&appid=${this.key}&units=${this.units}
    `);
  }
}
