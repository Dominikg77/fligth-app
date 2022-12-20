import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor() { }



  formatName(value: string | undefined, format: 'long' | 'short'): string | undefined {

    let short;
    let long;

    switch (value) {
      case 'Graz':
    short ='GRZ';
    long = 'Flughafen Graz Thalerholf';
    break;
    case 'Hamburg':
      short = 'HAM';
      long = 'Airport Hamburg Fuhlsbüttel Helmut Schmidt';
      break;
      default:
        short = long = value;
    }

    if (format === 'long'){
      return long;
    }
        return short;
      }

    }


