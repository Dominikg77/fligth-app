import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight';
import { FlightService } from '../flight.service';
import { DummyFlightService } from '../dummy-flight.service';

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
  date: string =(new Date().toISOString())

  basket: {[ key: number]: boolean} = {
    // 3: true,
    // 5: true,
  }

  constructor(private flightService: FlightService) {
if (flightService instanceof DummyFlightService){
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

