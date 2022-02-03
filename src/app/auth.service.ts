import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  localStorage: any;

  constructor() { }

  authUser(user: any){
    let UserArray=[{email:'thiru102000@gmail.com',password:'thiru'},
    {email:'uday@gmail.com',password:'uday'}];
    
    return UserArray.find((p: { email: any; password: any; }) => p.email ===user.email && p.password === user.password);
  }
}
