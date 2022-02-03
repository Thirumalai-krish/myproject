import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { booking } from '../booking';
import { BookingGuardService } from '../bookingguardservice';
import { BookingserviceService } from '../bookingservice.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
 
  public booking = [] as any;
  constructor(private bservice: BookingserviceService,private bsservice: BookingGuardService, private router: Router,private aroute: ActivatedRoute) {}
  public selectedId: number = 0;

  public bid: any = this.aroute.snapshot.params['bid'];


  ngOnInit(): void {
    this.bservice
      .getBookingFromService()
      .subscribe((data) => (this.booking = data));
     
        
     
  }
  onDelete(book: booking) {
    this.selectedId = book.bid;
    if (window.confirm('Are You Sure Cancel the Booking')) {
      this.bservice
        .deletebooking(this.selectedId)
        .subscribe((data: {}) => this.router.navigate(['/status']));
    }
  }

}

function canActivate(bid: any) {
  throw new Error('Function not implemented.');
}
