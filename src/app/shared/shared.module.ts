import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DateComponent } from '../date/date.component';
import { CityPipe } from './city.pipe';
import { StatusColorPipe } from './status-color.pipe';
import { StatusFilterPipe } from './status-filter.pipe';
import { CityValidationDirective } from './validation/city-validation.directive';



@NgModule({
  declarations: [
    DateComponent,
    CityPipe,
    StatusColorPipe,
    StatusFilterPipe,
    CityValidationDirective,

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
// kriegt jedes andere Modul mit über
CommonModule,

  ]
})
export class SharedModule { }
