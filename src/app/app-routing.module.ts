import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PaymentComponent } from './payment/payment.component';
import { BookingComponent } from './booking/booking.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { StatusComponent } from './status/status.component';
import { CreatebookingComponent } from './createbooking/createbooking.component';
import { UpdatestatusComponent } from './updatestatus/updatestatus.component';
import { BookingnotfoundComponent } from './bookingnotfound/bookingnotfound.component';
import { BookingGuardService } from './bookingguardservice';
import { CreateregisterComponent } from './createregister/createregister.component';
import { RegistercustomerlistComponent } from './registercustomerlist/registercustomerlist.component';
import { UpdateregisterlistComponent } from './updateregisterlist/updateregisterlist.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },

  { path: 'login', component: LoginComponent },
  
  {path: 'register', component: RegisterComponent },

  {path: 'payment', component: PaymentComponent },
  
  {path: 'booking', component: BookingComponent },

  {path: 'contactus', component: ContactusComponent },

  {path: 'aboutus', component: AboutusComponent },

  { path: 'createbooking', component: CreatebookingComponent },

  { path: 'updatestatus/:bid', component: UpdatestatusComponent},

  { path: 'status', component: StatusComponent },

  { path: 'bookingnotfound', component: BookingnotfoundComponent },

  

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  
  {path: 'createregister', component: CreateregisterComponent },

  {path: 'registercustomerlist', component: RegistercustomerlistComponent },

  {path: 'updateregisterlist/:rid', component: UpdateregisterlistComponent }];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }