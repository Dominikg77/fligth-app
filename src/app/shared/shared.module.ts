import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DateComponent } from '../date/date.component';
import { CityPipe } from './city.pipe';
import { StatusColorPipe } from './status-color.pipe';
import { StatusFilterPipe } from './status-filter.pipe';
import { CityService } from './city.service';



@NgModule({
  declarations: [
    DateComponent,
    CityPipe,
    StatusColorPipe,
    StatusFilterPipe,



  ],
  imports: [
    CommonModule,
    FormsModule
  ], exports: [
DateComponent,
CityPipe,
StatusColorPipe,
StatusFilterPipe,

  ]
})
export class SharedModule { }
