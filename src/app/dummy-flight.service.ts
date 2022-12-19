import { Injectable } from '@angular/core';
import { FlightService } from './flight.service';
import { Observable, of } from 'rxjs';
import { Flight } from './flight';

@Injectable({
  providedIn: 'root'
})
export class DummyFlightService implements FlightService {

  constructor() { }

find(from: string, to:string): Observable<Flight[]> {
  return of([
    {id: 1, from: 'Frankfurt', to: 'Flagranti', date: '2022-01-02T19:00+01:00'},
    {id: 2, from: 'Frankfurt', to: 'Kognito', date: '2022-01-02T19:30+01:00'},
    {id: 3, from: 'Frankfurt', to: 'Malorca', date: '2022-01-02T19:45+01:00'},
  ]);
}

}
