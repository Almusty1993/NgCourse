import { Component } from '@angular/core'

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent {
  cnumber : any = ''
  cname : any = ''
  exdate : any = ''
  snumber : any = ''

  carddetails = {
    number : '5663273',
    name : 'John Doe',
    expirydate : '12082023',
    cvv : '878',
  }

  onPay() {
    console.log(
      'Entered CardNumber is :' +
      this.cnumber +
      ' CardName is: ' +
      this.cname +
      ' ExpiryDate : ' +
      this.exdate +
      'Security Number is : ' +
      this.snumber,
    )

    if (
      this.cnumber == this.carddetails.number &&
      this.cname == this.carddetails.name &&
      this.exdate == this.carddetails.expirydate &&
      this.snumber == this.carddetails.cvv
    ) {
      alert('Correct')
    } else {
      alert('Incorrect Info, please try again!')
    }
  }
}
