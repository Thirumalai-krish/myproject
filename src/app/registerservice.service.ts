import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Register } from './Register';

@Injectable({
  providedIn: 'root',
})
export class RegisterserviceService {
  private url: string = 'http://localhost:8080/sprgasbookingsystem/register';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  ValidateUser(email:any,password:any){
    return true;
}
  constructor(private http: HttpClient) {}
  getRegisterFromService(): Observable<Register[]> {
    return this.http
      .get<Register[]>(this.url + '/allreg')
      .pipe(retry(1), catchError(this.handleError));
  }

  getRegister(rid: any): Observable<Register> {
    return this.http
      .get<Register>(this.url + '/getreg/' + rid, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  createRegister(Register: any): Observable<Register> {
    console.log(Register);
    return this.http
      .post<Register>(
        this.url + '/createReg',
        JSON.stringify(Register),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  updateRegister(register: any): Observable<Register> {
    console.log(register);
    return this.http
      .put<Register>(
        this.url + '/updateReg',
        JSON.stringify(register),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  deleteRegister(rid: number): Observable<Register> {
    console.log(rid + ' from deleteRegister()');
    return this.http
      .delete<Register>(this.url + '/deleteReg/' + rid, this.httpOptions)
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
