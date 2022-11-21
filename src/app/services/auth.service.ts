import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  authState,
} from '@angular/fire/auth';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { map } from 'rxjs';
import { UserCreated } from 'src/interfaces/user.interface';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth, private firestore: Firestore) {}

  initAuthListener() {
    onAuthStateChanged(this.auth, (user) => {
      console.log(user);
      console.log(user?.uid);
      console.log(user?.email);
    });
  }

  // fix https://www.youtube.com/watch?v=8VTxuIvMTlc

  createUser({ name, email, password }: UserCreated) {
    return createUserWithEmailAndPassword(this.auth, email, password).then(
      ({ user }) => {
        const newUser = new User(user.uid, name, user.email as string);
        const userRef = collection(this.firestore, 'user');
        return addDoc(userRef, { ...newUser });
      }
    );
  }

  signIn(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }
  logout() {
    return this.auth.signOut();
  }
  isAuth() {
    return authState(this.auth).pipe(map((fUser) => fUser != null));
  }
}
