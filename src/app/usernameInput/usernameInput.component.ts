import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usernameInput',
  templateUrl: './usernameInput.component.html',
  styleUrls: ['./usernameInput.component.css']
})
export class UsernameInputComponent implements OnInit {
  userName = '';
  allowClick = false;

  constructor() {


  }

  ngOnInit() {
  }

  onClickReset() {
    this.userName = '';
  }

  isEmpty(event: any) {
    this.userName = (<HTMLInputElement>event.target).value; //Fetching data from input field to be used in this method
    if (this.userName != '') {
      this.allowClick = true;
    }
  }

}
