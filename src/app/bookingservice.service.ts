import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { booking } from './booking';

@Injectable({
  providedIn: 'root',
})
export class BookingserviceService {
  private url: string = 'http://localhost:8080/sprgasbookingsystem/booking';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}
  getBookingFromService(): Observable<booking[]> {
    return this.http
      .get<booking[]>(this.url + '/allbook')
      .pipe(retry(1), catchError(this.handleError));
  }
  getBooking(bid: any): Observable<booking> {
    return this.http
      .get<booking>(this.url + '/getBook/' + bid, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }
  createBooking(booking: any): Observable<booking> {
    console.log(booking);
    return this.http
      .post<booking>(
        this.url + '/createBook',
        JSON.stringify(booking),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }
  updatebooking(booking: any): Observable<booking> {
    console.log(booking);
    return this.http
      .put<booking>(
        this.url + '/updateBook',
        JSON.stringify(booking),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }
  deletebooking(bid: number): Observable<booking> {
    console.log(bid + ' from deletebooking()');
    return this.http
      .delete<booking>(this.url + '/deleteEmp/' + bid, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code : ${error.status} \n Error Message : ${error.message} `;
    }

    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
