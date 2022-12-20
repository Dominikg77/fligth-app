import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DateComponent } from '../date/date.component';
import { CityPipe } from './city.pipe';
import { StatusColorPipe } from './status-color.pipe';
import { StatusFilterPipe } from './status-filter.pipe';
import { CityValidationDirective } from './validation/city-validation.directive';
import { RoundTripValidationDirective } from './validation/round-trip-validation.directive';
import { AsyncCityValidationDirective } from './validation/async-city-validation.directive';
import { ValidationErrorsComponent } from './validation/validation-errors/validation-errors.component';



@NgModule({
  declarations: [
    DateComponent,
    CityPipe,
    StatusColorPipe,
    StatusFilterPipe,
    CityValidationDirective,
    RoundTripValidationDirective,
    AsyncCityValidationDirective,
    ValidationErrorsComponent,

  ],
  imports: [
    CommonModule,
    FormsModule
  ], exports: [
DateComponent,
CityPipe,
StatusColorPipe,
StatusFilterPipe,
CityValidationDirective,
RoundTripValidationDirective,
AsyncCityValidationDirective,
ValidationErrorsComponent,



// kriegt jedes andere Modul mit über
CommonModule,
  ValidationErrorsComponent,

  ]
})
export class SharedModule { }
