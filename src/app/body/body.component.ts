import { Component, OnInit } from '@angular/core';
import { GetApiService } from '../get-api.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})

export class BodyComponent implements OnInit {

  txtCity = "Toronto";

  constructor(private api: GetApiService) {

  }
  
  btnGetWeather() {
    this.api.getWeather(this.txtCity).subscribe((data) => {
      console.log(data);
    })
  }

  ngOnInit() {
    
  }

  btnReset() {
    this.txtCity = "";
  }
}
