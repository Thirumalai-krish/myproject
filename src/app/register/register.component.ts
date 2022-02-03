import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterserviceService } from '../registerservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private router: Router,private service: RegisterserviceService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
     
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      username:['',Validators.required],
      city:['',Validators.required],
      state:['',Validators.required],
      zip:['',Validators.required],
      mobileno:['',Validators.required],
      distributername:['',Validators.required],
      
      
      email:['',Validators.required],
      password:['',Validators.required],
     
      
      
    })
  }

  ngSubmit(){
    console.log(this.registerForm.value);
    alert("Register Sucessfully");
  }

  addbooking() {
    console.log('From emp.comp.ts ' + this.registerForm);
    this.service.createRegister(this.registerForm.getRawValue()).subscribe((data: {}) => this.router.navigate(['/registercustomerlist']));
  }
}
