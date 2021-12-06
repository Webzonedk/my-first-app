import { Component } from '@angular/core';

@Component({
  selector: 'app-clickLog',
  templateUrl: './clickLog.component.html',
  styleUrls: ['./clickLog.component.css']
})
export class ClickLogComponent {
  showSecret = false;
  log = [];


  constructor() {
  }



  onToggleDetails() {
    this.showSecret = !this.showSecret;
    // this.log.push(this.log.length + 1);  //this just shows the counter increment
    this.log.push(new Date());
  }


}
