import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight';
import { FlightService } from '../flight.service';
import { DummyFlightService } from '../dummy-flight.service';
import { FlightClass } from '../flight-class';
import { LuggageOption } from '../luggage-option';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss']
})
export class FlightSearchComponent implements OnInit {
  // such krierien
  from = 'Hamburg';
  to = 'Graz';
  // nimmt die gefunden flügen auf
  flights: Array<Flight> = []
  selectedFlight: Flight | null = null;
  date: string = (new Date().toISOString())
  delayFilter = false

  basket: { [key: number]: boolean } = {}
  minlength: any;
  appCity: any;
  nonstop = false;

  flightClasses: FlightClass[] = [
    { id: 1, name: '1st Class' },
    { id: 2, name: 'Buisness Class' },
    { id: 3, name: 'Economy Class'}
  ]
  flightClass = this.flightClasses[2];

  luggageOptions: LuggageOption [] = [
    { id: 0, name: 'No luggage'},
    { id: 1, name: '1 piece of luggage'},
    { id: 2, name: '2 pieces of luggage'}
  ]
  luggage = this.luggageOptions[2];

  constructor(private flightService: FlightService) {

    if (flightService instanceof DummyFlightService) {
      console.log('Eigentlich Dummy Service')
    }

  }

  ngOnInit() {

    this.search()

  }

  search(): void {

    this.flightService.find(this.from, this.to).subscribe({
      next: (flights) => {
        this.flights = flights
      },
      error: (err) => {
        console.log('Error', err)
      }
    })
  }

  select(f: Flight): void {
    this.selectedFlight = f
  }



}

