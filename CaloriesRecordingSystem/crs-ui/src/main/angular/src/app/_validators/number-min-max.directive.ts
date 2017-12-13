import {Directive, forwardRef, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS} from '@angular/forms';

@Directive({
  selector: '[appNumberMinMax]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => NumberMinMaxDirective), multi: true },
  ],
})
export class NumberMinMaxDirective {

  @Input() minValue: number = Number.MIN_VALUE;
  @Input() maxValue: number = Number.MAX_VALUE;
  @Input() wrongNumberMessage: string;

  constructor() { }

  validate(c: AbstractControl): { [key: string]: any } {
    return c.value >= this.minValue && c.value <= this.maxValue ? null : { message: this.wrongNumberMessage };
  }

}
