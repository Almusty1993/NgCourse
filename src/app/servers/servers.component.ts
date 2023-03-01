import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  displayMessage : boolean = false;
  displayMessage1 : boolean = false;

  displayUsernameWarning : boolean = false;
  displayPasswordWarning : boolean = false;
  displayLoginMessage : boolean = false;
  displayUserPasswordWarning : Boolean = false;

  uname : any = '';
  upass : any = '';



  onLogin() {
    if (this.uname == '' && this.upass == ''){
      this.displayUserPasswordWarning = true;
      this.displayUsernameWarning = false;
      this.displayPasswordWarning = false;
      this.displayLoginMessage = false;
    } else if (this.uname == '') {
      this.displayUsernameWarning = true;
      this.displayPasswordWarning = false;
      this.displayLoginMessage = false;
    } else   if (this.upass == '') {
      this.displayUsernameWarning = false;
      this.displayPasswordWarning = true;
      this.displayLoginMessage = false;
    }
     else {
      this.displayUserPasswordWarning = false;
      this.displayUsernameWarning = false;
      this.displayPasswordWarning = false;
      this.displayLoginMessage = true;
    }
  }

  numbers: any = [2, 4, 6, 8, 10];

  students = ['Bob', 'Rob', 'Joe'];

  animals = [
    {
      name: 'Dog',
      legs: 4,
    },

    {
      name: 'Cat',
      legs: 6,
    },
  ];

  employees = [
    { id: 100, name: 'abc', college: 'MCIT' },
    { id: 101, name: 'abc1', college: 'MCIT' },
    { id: 102, name: 'abc2', college: 'MCIT' },
    { id: 103, name: 'abc3', college: 'MCIT' },
    { id: 104, name: 'abc4', college: 'MCIT' },
    { id: 105, name: 'abc5', college: 'MCIT' },
    { id: 106, name: 'abc6', college: 'MCIT' },
    { id: 107, name: 'abc7', college: 'MCIT' },
    { id: 108, name: 'abc8', college: 'MCIT' },
    { id: 109, name: 'abc9', college: 'MCIT' },
  ];


mobiles = [
  {name : 'Apple', Model : '14', price : 1500},
  {name : 'Google Pixel', Model : '10', price : 1000},
  {name : 'Samsung', Model : 'S14', price : 1400}
]

make : any = '';
model : any = '';
price : any = '';

onAddInventory(){
  this.mobiles.push({
    name : this.make,
    Model : this.model,
    price : this.price
  })
}

serverStatus : string = 'Online';

getBgColor(){
  if (this.serverStatus == 'online') {
    return 'purple';
  }else{
    return 'red';
  }
}


stName : any = '';
stResult : any = '';

getColor(){
  if (this.stResult == 'pass') {
  return 'green';
  }else if (this.stResult == 'fail'){
    return 'red';
  }else{
    return 'red';
  }
}

MCITStudents = [
  {name:'XYZ',id: 101 , result : 'pass'},
  {name:'XYZ1',id: 102 , result : 'fail'},
  {name:'XYZ2',id: 103 , result : 'pass'},
  {name:'XYZ4',id: 104 , result : 'fail'},
  {name:'XYZ5',id: 105 , result : 'pass'},
  {name:'MCIT',id: 105 , result : 'fail'},
]


servers = [
  {name : 'dev server', status : 'online'},
  {name : 'pre prod server', status : 'offline'}
]


serverName : string = '';
srvStatus : string = '';

onAddServer(){
  this.servers.push({
    name : this.serverName,
    status : this.srvStatus
  })
}

















}
