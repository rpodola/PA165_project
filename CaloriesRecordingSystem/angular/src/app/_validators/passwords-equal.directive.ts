import {Attribute, Directive, forwardRef} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';

const noMatchMessage = 'Passwords do not match';
const noValueMessage = 'Password is required';

@Directive({
  selector: '[appPasswordsEqual]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => PasswordsEqualDirective), multi: true },
  ],
})
export class PasswordsEqualDirective implements Validator {

  constructor(
    @Attribute('appPasswordsEqual') public password: string,
  ) { }

  validate(c: AbstractControl): { [key: string]: any } {
    const password = c.root.get(this.password);

    if (!c.value) {
      return { message: noValueMessage };
    }

    return (!password || c.value === password.value) ?
      null :
      {
        message: noMatchMessage,
      };
  }

}
