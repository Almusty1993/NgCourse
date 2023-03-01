import { Component } from '@angular/core';

@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.css']
})
export class Question1Component {

  viewQ2 : boolean = false;
  viewQ3 : boolean = false;
  viewQ4 : boolean = false;


  viewQuestion2(){
    this.viewQ2 = true;
    this.viewQ3 = false;
    this.viewQ4 = false;
  }
  viewQuestion3(){
    this.viewQ2 = false;
    this.viewQ3 = true;
    this.viewQ4 = false;
  }
  viewQuestion4(){
    this.viewQ2 = false;
    this.viewQ3 = false;
    this.viewQ4 = true;
  }


}
