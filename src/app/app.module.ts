import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { CollegeComponent } from './college/college.component';
import { MarketingComponent } from './marketing/marketing.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PaymentComponent } from './payment/payment.component';
import { ServersComponent } from './servers/servers.component';
import { Question2Component } from './question2/question2.component';
import { Question3Component } from './question3/question3.component';
import { Question4Component } from './question4/question4.component';
import { Question1Component } from './question1/question1.component';
import { PipesComponent } from './pipes/pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    CollegeComponent,
    MarketingComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    PaymentComponent,
    ServersComponent,
    Question2Component,
    Question3Component,
    Question4Component,
    Question1Component,
    PipesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
