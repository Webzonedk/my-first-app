import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usernameInput',
  templateUrl: './usernameInput.component.html',
  styleUrls: ['./usernameInput.component.css']
})
export class UsernameInputComponent implements OnInit {
  userName = '';
  allowClick = false;
  secretPassword = 'Tuna';
  showDetails = false;
  clickLogs = [];
  timeStamp = Date.now();


  constructor() {
  }

  ngOnInit() {
  }

  sendInfo() {
    if (this.userName != '') {
      this.clickLogs.push(this.userName);
    }
    this.userName = '';
  }

  isEmpty(event: any) {
    this.userName = (<HTMLInputElement>event.target).value; //Fetching data from input field to be used in this method
    if (this.userName != '') {
      this.allowClick = true;
    }
  }

  showPassword() {
    this.showDetails = true;
  }

}
