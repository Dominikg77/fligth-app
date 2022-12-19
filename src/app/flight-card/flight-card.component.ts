import { Component, EventEmitter, Input, OnInit, Output, SimpleChange } from '@angular/core';
import { Flight } from '../flight';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.scss']
})
export class FlightCardComponent implements OnInit {

@Input() item: Flight | null = null
@Input() selected = false
@Output() selectedChange = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit(): void {


    // setTimeout(()=>  this.selectedChange.next(false), 0)
    // console.log('oninit', this.item)
  }

//   ngOnChanges(changes: any){
//     console.log('onchanges', this.item)

//     if (changes.item){
//       console.log('cc', this.item)
//     }
//     if (changes.selecte)
// console.log('dsfdf', this.select)
//   }

  select(){
    this.selected = true
    this.selectedChange.emit(true)
  }

  deselect(){
    this.selected = false
    this.selectedChange.emit(false)

  }

}
