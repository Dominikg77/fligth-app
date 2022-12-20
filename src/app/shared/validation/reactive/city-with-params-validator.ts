import { ValidatorFn } from "@angular/forms";

export function cityWithParamsValidator(allowedCities: string[]): ValidatorFn {

return (control) => {
  if (allowedCities.includes(control.value)){
    return null
  }
  return {
    city: true
  }
}

}
