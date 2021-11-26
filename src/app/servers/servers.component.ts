import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  //  selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName= 'Testserver';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was createt! Name is' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName=(<HTMLInputElement>event.target).value;//Fetching data from input field in HTML file to be showed in the string interpolation serverName
  }

}
