import { Component, OnInit } from '@angular/core';
import { GetApiService } from '../get-api.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})

export class BodyComponent implements OnInit {

  txtCity = "toronto";

  //data fetched
  wdata; 

  //current date
  date = new Date();

  //temp
  temp;
  getIcon; 
  iconSrc;

sunrise;
sunset;

  constructor(private api: GetApiService) {

  }




  btnGetWeather() {
    this.getWeather();

     }


  getWeather() {
    this.api.getWeather(this.txtCity).subscribe((data) => {
      console.log(data);
      this.wdata = data;
      
      this.sunrise = new Date(this.wdata.sys.sunrise * 1000);
      this.sunset = new Date(this.wdata.sys.sunset * 1000);
    });
  
    
  
  }

  ngOnInit() {
    this.txtCity = "toronto";
    this.getWeather();
  }

  // btnReset() {
  //   this.txtCity = "";
  // }
}
