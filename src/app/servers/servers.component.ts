import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  //  selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverID: number = 0;
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created!';
  serverName = 'Testserver';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];
  serverIDs = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  get ServerIDValue() {
    return this.serverID;
  }

  get ServerNameValue(){
    return this.serverName;
  }


  onCreateServer() {
    this.serverCreated = true;
    this.serverName = (<HTMLInputElement>event.target).value;//Fetching data from input field in HTML file to be showed in the string interpolation serverName
    this.servers.push(this.serverName);
    this.serverIDs.push(this.serverID);
    this.serverCreationStatus = 'Server was createt! Name is' + this.serverName;
    this.serverID++;
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;//Fetching data from input field in HTML file to be showed in the string interpolation serverName
  }

}
