import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs';
import { FlightService } from 'src/app/flight-booking/flight.service';


@Directive({
  selector: '[appAsyncCity]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: AsyncCityValidationDirective,
      multi: true
    }
  ]
})

export class AsyncCityValidationDirective implements AsyncValidator {


  constructor(private flightService: FlightService) { }

  validate(control: AbstractControl<any, any>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {

    const error: ValidationErrors = {appAsyncCity: true};

    return this.flightService.find(control.value, '').pipe(
      map(flights => flights.length === 0 ? error : null)
    )

  }


}
