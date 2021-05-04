import { Component, OnInit } from '@angular/core';
import { GetApiService } from '../get-api.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})

export class BodyComponent implements OnInit {

  txtCity = "toronto";

  constructor(private api: GetApiService) {

  }

  //data fetched
  wdata;

  btnGetWeather() {

  }


  getWeather() {
    this.api.getWeather(this.txtCity).subscribe((data) => {
      console.log(data);
      this.wdata = data;
    });
  }

  ngOnInit() {
    this.txtCity = "toronto";
    //this.getWeather();
    this.api.getWeather(this.txtCity).subscribe((data) => {
      console.log(data);
      this.wdata = data;
    });
   
    //display data
    document.getElementById("table").innerHTML = `
    <tr>
      <th>${this.wdata.name}</th>
      <th>temp</th>
      <th>temp</th>
      <th>temp</th>
      <th>temp</th>
    </tr>
    <tr>
      <td>temp</td>
      <td>temp</td>
      <td>temp</td>
      <td>temp</td>
      <td>temp</td>

    </tr>
  `;



  }

  // btnReset() {
  //   this.txtCity = "";
  // }
}
