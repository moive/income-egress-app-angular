import { Injectable } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { IincomeEgress } from '../../interfaces/income-egress.interface';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class IncomeEgressService {
  constructor(private firestore: Firestore, private authService: AuthService) {}

  createIncomeEgress(incomeEgress: IincomeEgress) {
    const uid = this.authService.user?.id;
    const ref = collection(this.firestore, `${uid}/ingresos-egresos/Items`);
    return addDoc(ref, incomeEgress);
  }
}
