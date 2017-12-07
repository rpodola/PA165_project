import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  wrongUsername: boolean;
  wrongUsernameMessage = 'Wrong username';

  wrongEmail: boolean;
  wrongEmailMessage = 'Wrong email';

  wrongPassword: boolean;
  wrongPasswordMessage = 'Wrong password';

  passwordsDontMatch: boolean;
  passwordsDontMatchMessage = 'Passwords don\'t match';

  constructor() { }

  ngOnInit() {
  }

}
