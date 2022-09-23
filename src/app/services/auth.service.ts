import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth) {}

  // fix https://www.youtube.com/watch?v=8VTxuIvMTlc

  createUser(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }
}
