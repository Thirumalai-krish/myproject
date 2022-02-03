import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";

import { BookingserviceService } from "./bookingservice.service";


@Injectable()
export class BookingGuardService implements CanActivate{
  [x: string]: any;
    route: any;
    constructor(private _bookingService: BookingserviceService,
        private _router: Router){

        }
        canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
            const bookingExists = !!this._bookingService.getBooking(Number(this.route.snapshot.paramMap.getBooking('bid')));
            if (bookingExists){
                return true;
            }else{
                this._router.navigate(['notfound']);
                return false;
            }


            
        }
}
