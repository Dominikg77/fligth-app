import { Component, EventEmitter, Input, OnInit, Output, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {


@Input() date: string | null = null;
@Output() dateChange = new EventEmitter<string>();


day: number | null = null;
month: number | null = null;
year: number | null = null;
hour: number | null = null;
minute: number | null = null;

  constructor() {
   }

  ngOnInit(): void {
  }

  ngOnChanges(){

    if(!this.date){
      return;
    }

    const date = new Date(this.date)
    this.day = date.getDate();
    this.month = date.getMonth();
    this.year = date.getFullYear();
    this.hour = date.getHours();
    this.minute = date.getMinutes()
  }

  apply(){
    if (!this.year || !this.month || !this.day || !this.hour || !this.minute){
      return;
    }
    const date = new Date (this.year, this.month, this.day, this.hour, this.minute);
    this.dateChange.next(date.toISOString())
  }

}
