export class LoginCredentials {
  username: string;
  password: string;

  areValid() {
    return this.username && this.password;
  }
}
