import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

 // Define API
 apiURL = 'https://api.spacexdata.com/v3';

 constructor(private httpClient: HttpClient) { }

 // Http Options
 httpOptions = {
   headers: new HttpHeaders({
     'Content-Type': 'application/json'
   })
 }  

 // HttpClient API get() method => Fetch launch list
 public getLaunches(params) {
  let subURL ='/launches';
   if (params.launchValue != '' ||  params.landValue !='' || params.yearValue != ''){
    subURL = `/launches?launch_success=${params.launchValue}&land_success=${params.landValue}&launch_year=${params.yearValue}`;
   }
   return this.httpClient.get(this.apiURL + subURL)
   .pipe(
     retry(1),
     catchError(this.handleError)
   )
 } 

 // Error handling 
 handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }

}
