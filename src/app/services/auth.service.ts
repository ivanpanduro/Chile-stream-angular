import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Simulación de credenciales
  private readonly validEmail = 'admin@chile.com';
  private readonly validPassword = '12345';

  constructor() {}

  login(email: string, password: string): boolean {
    return email === this.validEmail && password === this.validPassword;
  }
}
