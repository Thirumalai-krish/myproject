import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingserviceService } from '../bookingservice.service';

@Component({
  selector: 'app-updatestatus',
  templateUrl: './updatestatus.component.html',
  styleUrls: ['./updatestatus.component.css']
})
export class UpdatestatusComponent implements OnInit {
  public employeeData: any = {};
  submitted = false;

  public bid: any = this.aroute.snapshot.params['bid'];
  public selectedId: any;
  onSubmit() {
    this.submitted = true;
    alert('Employee datas are validated successfully!');
  }
  constructor(
    private service: BookingserviceService,
    public router: Router,
    private aroute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log('from ng oninit' + this.bid);
    this.service
      .getBooking(this.bid)
      .subscribe((data) => (this.employeeData = data));
  }

  updateBooking() {
    console.log(' Booking Data ----->' + this.employeeData);
    this.service
      .updatebooking(this.employeeData)
      .subscribe((data: {}) => this.router.navigate(['/status']));
  }
}
