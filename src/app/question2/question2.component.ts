import { Component } from '@angular/core';

@Component({
  selector: 'app-question2',
  templateUrl: './question2.component.html',
  styleUrls: ['./question2.component.css']
})
export class Question2Component {

ind : any = '';
serverName : any = '';
serverID : any = '';
serverContent : any = '';
serverStatus : boolean = false;
gender : any = '';
showStatus : any = '';
removeID : any = '';

  servers = [
    {Index: 1, id: 101, name : "test server", content : "This is test server", status : true},
    {Index: 2, id: 102, name : "prod server", content : "This is prod server", status : true},
    {Index: 3, id: 103, name : "unit test server", content : "This is UT server", status : false}
  ];

onSubmit(){

this.servers.push({
Index : this.ind,
id : this.serverID,
name : this.serverName,
content : this.serverContent,
status : this.serverStatus
})
}

// onDelete(){
//   for (let i = 0; i < this.servers.length; i++){
//     if(this.servers[i].id == this.removeID){
//       this.servers.splice(i,1);
//     }
//   }
// }


deleteItem(id: any) {
  this.servers = this.servers.filter(item => item.id !== id);
}


onDelete(){
  this.deleteItem(this.removeID)
}





onShow(){
if(this.showStatus == this.serverStatus){
  this.serverStatus = true;
}else{
  this.serverStatus = false;
}

// this.serverStatus = true;
// this.serverContent = true;
// this.serverStatus
}


}
