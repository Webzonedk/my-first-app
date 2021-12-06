import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clickLog',
  templateUrl: './clickLog.component.html',
  styleUrls: ['./clickLog.component.css']
})
export class ClickLogComponent implements OnInit {
  showSecret = false;
  log = [];


  constructor() {

  }

  ngOnInit(): void {
  }

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);
  }


}
