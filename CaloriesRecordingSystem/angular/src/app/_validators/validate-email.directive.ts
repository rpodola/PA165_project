import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';

const pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const wrongEmailMessage = 'Wrong E-Mail address';
const noValueMessage = 'E-Mail is required';

@Directive({
  selector: '[appValidateEmail]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: ValidateEmailDirective, multi: true },
  ],
})
export class ValidateEmailDirective implements Validator {

  constructor() { }

  validate(c: AbstractControl): { [key: string]: any } {
    if (!c.value ) {
      return { message: noValueMessage };
    }

    return c.value.match(pattern) ? null : { message: wrongEmailMessage };
  }

}
