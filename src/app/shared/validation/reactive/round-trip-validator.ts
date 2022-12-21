import { FormGroup, ValidatorFn } from "@angular/forms";

export function roundTripValidator(): ValidatorFn {

return (control) => {
  const formGroup = control as FormGroup;
  const from = formGroup.controls?.['from'].value;
  const to = formGroup.controls?.['to'].value;

  if(from === to){
    return {
      roundTrip: true
    }
  }
  return null


}

}
