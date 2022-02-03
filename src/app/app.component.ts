import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gbsprj';
  router: any;

  onLogout(){
    if
      (window.confirm('Are you sure , you want to logout')){
        localStorage.removeItem('user');
        
      }
      
  }
}
