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

  sunrise;
  sunset;
  toggleIsChecked = false;
  wSpeedUnit;



  constructor(private api: GetApiService) {

  }

  /**
   * retrieves toronto weather by default
   */
  ngOnInit() {
    this.txtCity = "toronto,ca";
    this.getWeather(this.toggleIsChecked);
  }

  /**
   * checks whether the txtbox has a value, 
   * if empty, shows error.
   * otherwise retrieved the data
   */
  btnGetWeather() {
    if (this.txtCity == "") {
      window.alert("You must input a city");
      document.getElementById("txtCity").focus();
    }
    else {
      this.getWeather(this.toggleIsChecked);
    }
  }

  /**
   * ajax call, retrieves the json from server
   * assigns to variables
   * 
   * @param toggleIsChecked cunit to use C or F
   */
  getWeather(toggleIsChecked: boolean) {
    this.api.getWeather(this.txtCity, toggleIsChecked).subscribe((data) => {
      //console.log(data);
      this.wdata = data;
      this.wSpeedUnit = this.toggleIsChecked == false ? "m/s" : "mi/h";
      this.sunrise = new Date(this.wdata.sys.sunrise * 1000);
      this.sunset = new Date(this.wdata.sys.sunset * 1000);

      document.getElementById("arrowDirH").style.transform = `rotate(${this.wdata.wind.deg}deg)`;
      document.getElementById("arrowDirV").style.transform = `rotate(${this.wdata.wind.deg}deg)`;
    });

  }


  /**
   * erases the textbox and focuses on it
   */
  btnReset() {
    this.txtCity = "";
    document.getElementById("txtCity").focus();
  }

  /**
   * converts temp to c or F
   */
  convertTemp() {
    this.txtCity = document.getElementById("cardCity").textContent;
    this.getWeather(this.toggleIsChecked == false ? true : false);
  }


}
