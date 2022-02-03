import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingserviceService } from '../bookingservice.service';

@Component({
  selector: 'app-createbooking',
  templateUrl: './createbooking.component.html',
  styleUrls: ['./createbooking.component.css']
})
export class CreatebookingComponent implements OnInit {
  bookingForm!: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private router: Router,private service: BookingserviceService) { }

  ngOnInit(): void {
    this.bookingForm = this.formBuilder.group({
     
      ctype:['',Validators.required],
      cname:['',Validators.required],
      mail:['',Validators.required],
      noofcylinders:['',Validators.required],
      city:['',Validators.required],
      
    })
  }

  ngSubmit(){
    console.log(this.bookingForm.value);
    alert("Register Sucessfully");
  }

  addbooking() {
    console.log('From emp.comp.ts ' + this.bookingForm);
    this.service.createBooking(this.bookingForm.getRawValue()).subscribe((data: {}) => this.router.navigate(['/status']));
  }
}
