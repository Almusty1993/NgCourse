import { Component } from '@angular/core';

@Component({
  selector: 'app-question3',
  templateUrl: './question3.component.html',
  styleUrls: ['./question3.component.css']
})
export class Question3Component {

userName : any = '';
userEmail : any = '';
userAge : any = '';
userCourse : any = '';
yesNo : any = '';
javaSelect : any = '';
pythonSelect : any = '';
javaScriptSelect : any = '';
reactSelect : any = '';
angularSelect : any = '';
textArea : any = '';
languages : any[] = [];

saves : any[] = [];

onSubmit(){

if (this.javaScriptSelect != '' && this.javaSelect != '' && this.angularSelect != ''
&& this.pythonSelect != '' && this.reactSelect != '') {
  this.languages.push(this.javaScriptSelect)
  this.languages.push(this.javaSelect)
  this.languages.push(this.angularSelect)
  this.languages.push(this.pythonSelect)
  this.languages.push(this.reactSelect)
}

// if (this.javaScriptSelect) {
//   this.languages.push(this.javaScriptSelect)
// }

// if (this.javaSelect) {
//   this.languages.push(this.javaSelect)
// }

// if (this.angularSelect) {
//   this.languages.push(this.angularSelect)
// }

// if (this.pythonSelect) {
//   this.languages.push(this.pythonSelect)
// }

// if (this.reactSelect) {
//   this.languages.push(this.reactSelect)
// }



this.saves.push({
name : this.userName,
email : this.userEmail,
age : this.userAge,
profile : this.userCourse,
recommend : this.yesNo,
languages : this.languages,
comments : this.textArea
})


// this.userName = '';
// this.userEmail = '';
// this.userAge = '';
// this.userCourse = '';
// this.yesNo = '';
// this.javaSelect = false;
// this.pythonSelect  = false;
// this.javaScriptSelect = false;
// this.reactSelect = false;
// this.angularSelect = false;
// this.textArea = '';
// this.languages = [];

}


}

