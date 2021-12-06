import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clickLog',
  templateUrl: './clickLog.component.html',
  styleUrls: ['./clickLog.component.css']
})
export class ClickLogComponent implements OnInit {
  logID: number = 0;


  constructor() {
this.logID++;

   }

  ngOnInit() {
  }

  getColor() {
    // if (this.logID >5) {
    // }
    return this.logID > 5 ? 'blue' : 'white';
  }


}
