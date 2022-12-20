import { Directive } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: 'form[appRoundTrip]',
providers: [
{
  provide: NG_VALIDATORS,
  useExisting: RoundTripValidationDirective,
  multi: true
}
]
})


export class RoundTripValidationDirective implements Validator {

  constructor() { }

validate(control: AbstractControl): ValidationErrors | null {
  const group = control as FormGroup;
const from = group.controls?.['from']?.value;
const to  = group.controls?.['to']?.value;

if (!from || !to){
  return null
}

if (from !== to){
  return null
}
return {
  appRoundTrip: true
}

}


}
