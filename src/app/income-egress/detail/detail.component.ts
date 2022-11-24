import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { IincomeEgress } from 'src/interfaces/income-egress.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit, OnDestroy {
  itemsCollection: IincomeEgress[] = [];
  incomeEgressSubs!: Subscription;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.incomeEgressSubs = this.store
      .select('incomeEgress')
      .subscribe(({ items }) => (this.itemsCollection = items));
  }
  ngOnDestroy(): void {
    this.incomeEgressSubs.unsubscribe();
  }
  remove(id: string) {
    console.log(id);
  }
}
