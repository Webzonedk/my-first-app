import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  @Input() serverID;
  @Input() serverName;
  serverStatus: string = 'offline';
  indexNr:number;



  constructor() {
    this.serverStatus = Math.random() >0.5 ? 'online' : 'offline';

  }

getServerID(){
  return this.serverID;
}


  getServerStatus() {
    return this.serverStatus;
  }

  getColor(){
    if (this.serverID<5) {
      return this.serverStatus === 'online' ? 'green' : 'red';
    }
    else{
      return this.serverID >=5 ? 'blue' : '';

    }
  }

}
