import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from '../Register';
import { RegisterserviceService } from '../registerservice.service';

@Component({
  selector: 'app-registercustomerlist',
  templateUrl: './registercustomerlist.component.html',
  styleUrls: ['./registercustomerlist.component.css']
})
export class RegistercustomerlistComponent implements OnInit {
  public register = [] as any;
  constructor(private rservice: RegisterserviceService, private router: Router) {}
  public selectedId: number = 0;

  ngOnInit(): void {
    this.rservice
      .getRegisterFromService()
      .subscribe((data: any) => (this.register = data));
  }
  onDelete(register: Register) {
    this.selectedId = register.rid;
    if (window.confirm('Are You Sure Cancel the Registration')) {
      this.rservice
        .deleteRegister(this.selectedId)
        .subscribe((data: {}) => this.router.navigate(['/registercustomerlist']));
    }
  }

}