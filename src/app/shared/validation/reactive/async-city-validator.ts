import { AsyncValidatorFn } from "@angular/forms";
import { map } from "rxjs";
import { FlightService } from "src/app/flight-booking/flight.service";

export function asyncCityValidator (flightService : FlightService): AsyncValidatorFn {

return (control) => {
  const error = {asyncCity: true} ;
  return flightService.find(control.value, '').pipe(map(flight => flight.length > 0 ? null: error))
}

}
