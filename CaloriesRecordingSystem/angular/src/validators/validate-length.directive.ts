import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';

@Directive({
  selector: '[appValidateLength]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: ValidateLengthDirective, multi: true }
  ],
})
export class ValidateLengthDirective implements Validator {

  @Input() minLength;
  @Input() maxLength;
  @Input() wrongValueMessage;
  @Input() noValueMessage;

  constructor() { }

  validate(c: AbstractControl): { [key: string]: any } {
    if (!c.value) {
      return { message: this.noValueMessage };
    }

    const { length } = c.value;

    return (length >= this.minLength && length <= this.maxLength) ? null : { message: this.wrongValueMessage };
  }

}
