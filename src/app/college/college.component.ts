import { Component } from '@angular/core';

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.css'],
})
export class CollegeComponent {

  serverName : any = 'Production Server';
  collegeName : string = 'MCIT!';
  collegeYear : number = 2023;

  flag : boolean = true;

  empname : string = 'MCIT';
  emppass : any = 'Almusty123';

  onClick() {
    // console.log("Button Click event executed from typescript ");

    this.flag = !this.flag;

    // if (this.flag) {
    //   this.flag = false;
    // }else{
    //   this.flag = true;
    // }
  }

  onClick1() {
    // console.log("Entered name is :" +this.empname+ "&  password is :" +this.emppass);

    if (this.empname == 'MCIT' && this.emppass == 'Almusty123') {
      alert('Login Successful');
    } else {
      alert('Login Failed, Please try again!');
    }
  }
  onClick2() {
    this.empname = '';
    this.emppass = '';
  }

  sname: any = '';
  gender: any = '';
  message1: any = '';
  course: any = '';

  online: any = false;
  offline: any = false;
  hybrid: any = false;

  onClick3() {
    // alert("Student name is :" +this.sname+ "&  Gender is :" +this.gender);

    // this.hybrid = !this.hybrid;
    // this.offline = !this.offline;
    // this.online = !this.online;

    // this.message1 = "Welcome "+this.sname+ "You have chosen gender type"+this.gender
    if (this.gender == 'male') {
      this.message1 =
        'Welcome Mr. ' + this.sname + ' you have chosen ' + this.course;
      this.displayMessage();
    } else {
      this.message1 =
        'Welcome Mrs. ' + this.sname + ' you have chosen ' + this.course;
      this.displayMessage();
    }
  }

  displayMessage() {
    switch (true) {
      case this.online:
        this.message1 = this.message1 + ' online sessions';
        break;
      case this.offline:
        this.message1 = this.message1 + ' offline sessions';
        break;
      case this.hybrid:
        this.message1 = this.message1 + ' hybrid session';
        break;
      default:
        this.message1 = this.message1 + ' online / offline / hybrid Session';
        break;
    }
  }
}
