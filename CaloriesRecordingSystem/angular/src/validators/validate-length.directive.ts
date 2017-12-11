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
  @Input() minLengthMessage;
  @Input() maxLengthMessage;
  @Input() noValueMessage;

  constructor() { }

  validate(c: AbstractControl): { [key: string]: any } {
    if (!c.value) {
      if (this.noValueMessage) {
        return { message: this.noValueMessage };
      } else {
        return null;
      }
    }

    const { length } = c.value;

    if (length <= this.minLength) {
      return { message: this.minLengthMessage };
    }

    if (length >= this.maxLength) {
      return { message: this.maxLengthMessage };
    }

    return null;
  }

}
