import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  Firestore,
  orderBy,
  query,
} from '@angular/fire/firestore';
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

  initIncomeEgressListener(id: string) {
    const ref = collection(this.firestore, `${id}/ingresos-egresos/Items`);
    const q = query(ref, orderBy('amount'));
    // return collectionData(q);
    return collectionData(q, { idField: 'id' });
  }

  removeIncomeEgress(id: string) {
    const uid = this.authService.user?.id;
    const refItemIncomeEgress = doc(
      this.firestore,
      `${uid}/ingresos-egresos/Items/${id}`
    );
    return deleteDoc(refItemIncomeEgress);
  }
}
