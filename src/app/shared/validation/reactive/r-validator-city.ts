import { Directive } from '@angular/core';
import { ValidatorFn } from '@angular/forms';



export const cityValidator: ValidatorFn = (control) => {

  if (control.value === 'Graz' || control.value === 'Hamburg' || control.value === 'Berlin' || control.value === 'Zürich'){
    return null
  }
  return {
    city: true
  }
}

