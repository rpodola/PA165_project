import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class LoginEventsService {
  public changeHappened = new EventEmitter();

  constructor() {}

  loginStateChanged() {
    this.changeHappened.emit();
  }

}
