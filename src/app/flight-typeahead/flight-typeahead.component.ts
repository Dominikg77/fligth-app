import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, concatMap, debounceTime, delay, exhaustMap, mergeMap, switchMap } from 'rxjs';
import { Flight } from '../flight-booking/flight';
import { FlightService } from '../flight-booking/flight.service';

@Component({
  selector: 'app-flight-typeahead',
  templateUrl: './flight-typeahead.component.html',
  styleUrls: ['./flight-typeahead.component.scss']
})
export class FlightTypeaheadComponent implements OnInit {
  control = new FormControl();
  input$ = this.control.valueChanges;

  flights$: Observable<Flight[]>

  constructor(private flightService: FlightService) {

    this.flights$ = this.input$.pipe(
      debounceTime(300),
      exhaustMap(input => this.load(input))
    )
  }

  load(from: string): Observable<Flight[]> {
    console.log('from', from)
    return this.flightService.find(from, '').pipe(
      delay(3000)
    )
  }

  ngOnInit(): void {
  }

}
