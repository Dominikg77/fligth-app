import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS, ValidationErrors } from '@angular/forms';

@Directive({
  selector: 'input[appCity]',
  providers: [
{
  provide: NG_VALIDATORS,
  useExisting: CityValidationDirective,
  multi: true
}
]
})


export class CityValidationDirective implements Validator {

  @Input() appCity = '';
  @Input() strict = false;

  public validate(c: AbstractControl): ValidationErrors | null {

    const allowedCities = this.appCity.split(',')

    if (allowedCities.includes(c.value)) {
      return null
    }
return {
  appCity: {
    reason: 'Request Airport is currently not available',
    allowedCities: allowedCities,
    tryAgain: 2031
  }
}
  }

  constructor() { }

}
