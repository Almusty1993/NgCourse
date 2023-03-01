import { Component } from '@angular/core';

@Component({
  selector: 'app-question4',
  templateUrl: './question4.component.html',
  styleUrls: ['./question4.component.css']
})
export class Question4Component {

cityChoice : any = '';
weather : any = []


onGo(){
  this.weather = [];

  if (this.cityChoice == "New york") {
    this.weather.push({
      location : 'New york',
    currentWeather : {day : 'Monday', date : '6 Oct', temp : '23', perception : '20%', wind : '18kmph', geo : 'East' },
    forecast : [
      {day : 'Tuesday', hightemp : '23', lowtemp : '18'},
      {day : 'Wednesday', hightemp : '30', lowtemp : '19'},
      {day : 'Thursday', hightemp : '28', lowtemp : '20'},
      {day : 'Friday', hightemp : '19', lowtemp : '18'},
      {day : 'Saturday', hightemp : '32', lowtemp : '22'},
      {day : 'Sunday', hightemp : '36', lowtemp : '30'}
    ]
    })
  }

  if (this.cityChoice == "Toronto") {
    this.weather.push({
      location : 'Toronto',
      currentWeather : {day : 'Monday', date : '9 Oct', temp : '35', perception : '50%', wind : '28kmph', geo : 'South' },
      forecast : [
        {day : 'Tuesday', hightemp : '20', lowtemp : '10'},
        {day : 'Wednesday', hightemp : '30', lowtemp : '20'},
        {day : 'Thursday', hightemp : '40', lowtemp : '30'},
        {day : 'Friday', hightemp : '20', lowtemp : '10'},
        {day : 'Saturday', hightemp : '30', lowtemp : '20'},
        {day : 'Sunday', hightemp : '40', lowtemp : '30'}
      ]
    })
  }

  if (this.cityChoice == "Montreal") {
    this.weather.push({
      location : 'Montreal',
        currentWeather : {day : 'Monday', date : '8 Oct', temp : '32', perception : '40%', wind : '23kmph', geo : 'West' },
        forecast : [
          {day : 'Tuesday', hightemp : '32', lowtemp : '22'},
          {day : 'Wednesday', hightemp : '30', lowtemp : '20'},
          {day : 'Thursday', hightemp : '20', lowtemp : '15'},
          {day : 'Friday', hightemp : '19', lowtemp : '18'},
          {day : 'Saturday', hightemp : '14', lowtemp : '10'},
          {day : 'Sunday', hightemp : '18', lowtemp : '15'}
        ]
    })
  }

}


  // newyork = {
  //   location : 'newyork',
  //   currentWeather : {day : 'Monday', date : '6 Oct', temp : '23', perception : '20%', wind : '18kmph', geo : 'East' },
  //   forecast : [
  //     {day : 'Tuesday', hightemp : '23', lowtemp : '18'},
  //     {day : 'Wednesday', hightemp : '30', lowtemp : '19'},
  //     {day : 'Thursday', hightemp : '28', lowtemp : '20'},
  //     {day : 'Friday', hightemp : '19', lowtemp : '18'},
  //     {day : 'Saturday', hightemp : '32', lowtemp : '22'},
  //     {day : 'Sunday', hightemp : '36', lowtemp : '30'}
  //   ]
  // }

    // toronto = {
    //   location : 'toronto',
    //   currentWeather : {day : 'Monday', date : '9 Oct', temp : '35', perception : '50%', wind : '28kmph', geo : 'South' },
    //   forecast : [
    //     {day : 'Tuesday', hightemp : '20', lowtemp : '10'},
    //     {day : 'Wednesday', hightemp : '30', lowtemp : '20'},
    //     {day : 'Thursday', hightemp : '40', lowtemp : '30'},
    //     {day : 'Friday', hightemp : '20', lowtemp : '10'},
    //     {day : 'Saturday', hightemp : '30', lowtemp : '20'},
    //     {day : 'Sunday', hightemp : '40', lowtemp : '30'}
    //   ]
    // }

      // montreal = {
      //   location : 'montreal',
      //   currentWeather : {day : 'Monday', date : '8 Oct', temp : '32', perception : '40%', wind : '23kmph', geo : 'West' },
      //   forecast : [
      //     {day : 'Tuesday', hightemp : '32', lowtemp : '22'},
      //     {day : 'Wednesday', hightemp : '30', lowtemp : '20'},
      //     {day : 'Thursday', hightemp : '20', lowtemp : '15'},
      //     {day : 'Friday', hightemp : '19', lowtemp : '18'},
      //     {day : 'Saturday', hightemp : '14', lowtemp : '10'},
      //     {day : 'Sunday', hightemp : '18', lowtemp : '15'}
      //   ]
      // }













}
