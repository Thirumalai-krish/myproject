import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { RegisterserviceService } from '../registerservice.service';
import { first } from 'rxjs/operators';






@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {

  }
  onLogin(loginForm: NgForm){
    console.log(loginForm.value);
    const user=this.authService.authUser(loginForm.value);
    console.log(user);

    if(user){
      localStorage.setItem('user',JSON.stringify(user));
      //console.log('Login Successfully')
      this.router.navigate(['home'])

    }
    else{
      console.log('Login not Successfully')
      
      alert("Invalid User");
    }
  }

}