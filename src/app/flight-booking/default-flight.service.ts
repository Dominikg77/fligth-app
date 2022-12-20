import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Flight } from './flight';
import { Observable } from 'rxjs';
import { FlightService } from './flight.service';



@Injectable()
export class DefaultFlightService implements FlightService {

 constructor(private http: HttpClient) { }

find(from: string, to: string): Observable<Flight[]> {

  const url = 'http://demo.angulararchitects.io/api/flight';

    const headers = new HttpHeaders().set('Accept', 'application/json')

    const params = new HttpParams().set('from', from).set('to', to);

    return this.http.get<Flight[]> (url, {headers, params})
}
}
