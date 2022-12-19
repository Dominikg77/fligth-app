import { Flight } from "../flight";

// // bsp 1
// export class ScheduledFlight implements Flight{

// id: number = 0;
// from: string = '';
// to: string = '';
// date: string ='';
// distance: number = 0;

// calcPrice(): number {
//     return this.distance / 3
// }

// }

// bsp  s 62
export class ScheduledFlight implements Flight{

  id: number = 0;
  from: string = '';
  to: string = '';
  date: string ='';
  distance: number = 0;


get unixDate(): number {
  return new Date(this.date).getTime()
}

set unixDate(time: number) {
  const date = new Date (time);
  this.date = date.toISOString()
}

  calcPrice(): number {
      return this.distance / 3
  }

  }
