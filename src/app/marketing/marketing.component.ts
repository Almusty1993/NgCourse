import { Component } from '@angular/core';
import { faPen } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.css']
})
export class MarketingComponent {

  faPen = faPen;

  serverName : any = "Production Server";
  collegeName : string = "MCIT!";
  collegeYear : number = 2023;

  flag : boolean = true;
  empname : string = "MCIT"
  emppass : any = "Almusty123"

  onClick(){
    // console.log("Button Click event executed from typescript ");

    this.flag = ! this.flag;

    // if (this.flag) {
    //   this.flag = false;
    // }else{
    //   this.flag = true;
    // }

  }

  onClick1(){
    // console.log("Entered name is :" +this.empname+ "&  password is :" +this.emppass);

    if (this.empname == "MCIT" && this.emppass == "Almusty123") {
      alert("Login Successful")
    }else{
      alert("Login Failed, Please try again!")
    }

  }


  onClick2(){
    this.empname = "";
    this.emppass = "";
  }



}
