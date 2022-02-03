import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { BookingComponent } from './booking/booking.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StatusComponent } from './status/status.component';
import { HttpClientModule } from '@angular/common/http';
import { CreatebookingComponent } from './createbooking/createbooking.component';
import { UpdatestatusComponent } from './updatestatus/updatestatus.component';
import { BookingnotfoundComponent } from './bookingnotfound/bookingnotfound.component';
import { BookingGuardService } from './bookingguardservice';
import { RegistercustomerlistComponent } from './registercustomerlist/registercustomerlist.component';
import { CreateregisterComponent } from './createregister/createregister.component';
import { UpdateregisterlistComponent } from './updateregisterlist/updateregisterlist.component';
import {ScrollingModule} from '@angular/cdk/scrolling'

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    LoginComponent,
    PaymentComponent,
    BookingComponent,
    ContactusComponent,
    AboutusComponent,
    StatusComponent,
    CreatebookingComponent,
    UpdatestatusComponent,
    BookingnotfoundComponent,
    RegistercustomerlistComponent,
    CreateregisterComponent,
    UpdateregisterlistComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ScrollingModule
   
    

  ],
  providers: [BookingGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
