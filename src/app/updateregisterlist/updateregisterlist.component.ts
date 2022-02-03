import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterserviceService } from '../registerservice.service';

@Component({
  selector: 'app-updateregisterlist',
  templateUrl: './updateregisterlist.component.html',
  styleUrls: ['./updateregisterlist.component.css']
})
export class UpdateregisterlistComponent implements OnInit {
  public employeeData: any = {};
  submitted = false;

  public rid: any = this.aroute.snapshot.params['rid'];
  public selectedId: any;
  
  onSubmit() {
    this.submitted = true;
    alert('Customer datas are validated successfully!');
  }
  constructor(
    private service: RegisterserviceService,
    public router: Router,
    private aroute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log('from ng oninit' + this.rid);
    this.service
      .getRegister(this.rid)
      .subscribe((data) => (this.employeeData = data));
  }

  updateRegister() {
    console.log(' Register Data ----->' + this.employeeData);
    this.service
      .updateRegister(this.employeeData)
      .subscribe((data: {}) => this.router.navigate(['/registercustomerlist']));
  }
}



