import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { FlightBookingModule } from './flight-booking/flight-booking.module';





@NgModule({
   imports: [
      BrowserModule,
      HttpClientModule,
FlightBookingModule,

   ],
   declarations: [
      AppComponent,
      SidebarComponent,
      NavbarComponent,

   ],
   providers: [ ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
