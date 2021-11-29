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
// checkInput(){}


  }

  ngOnInit() {
  }

  onClickReset(){

  }

}
