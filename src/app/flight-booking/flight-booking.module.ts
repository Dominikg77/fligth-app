import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Flight_Booking_ROUTES  } from './flight-booking.routes'


import { SharedModule } from '../shared/shared.module';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { FlightBookingComponent } from './flight-booking.component';



@NgModule({

  imports: [
    FormsModule,
    SharedModule,
    RouterModule.forChild(Flight_Booking_ROUTES)
  ],
  declarations: [
    FlightSearchComponent,
    FlightCardComponent,
    PassengerSearchComponent,
    FlightEditComponent,
    FlightBookingComponent
  ],
  exports: [
    FlightSearchComponent
  ]
})
export class FlightBookingModule { }
