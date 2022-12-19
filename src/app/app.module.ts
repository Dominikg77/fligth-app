import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { DateComponent } from './date/date.component';
import { FlightService } from './flight.service';
import { DefaultFlightService } from './default-flight.service';

@NgModule({
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule

   ],
   declarations: [
      AppComponent,
      SidebarComponent,
      NavbarComponent,
      FlightSearchComponent,
      FlightCardComponent,
      DateComponent,
   ],
   providers: [
    {
      provide: FlightService,
      useClass: DefaultFlightService
    }
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
