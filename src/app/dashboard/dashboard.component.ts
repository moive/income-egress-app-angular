import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, Subscription } from 'rxjs';
import { AppState } from '../app.reducer';
import { IncomeEgressService } from '../services/income-egress.service';
import { setItems } from '../income-egress/income-egress.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  userSub!: Subscription;
  incomeEgressSub!: Subscription;

  constructor(
    private store: Store<AppState>,
    private incomeEgressService: IncomeEgressService
  ) {}

  ngOnInit(): void {
    this.userSub = this.store
      .select('user')
      .pipe(filter((auth) => auth.user != null))
      .subscribe(({ user }) => {
        console.log(user);
        this.incomeEgressSub = this.incomeEgressService
          .initIncomeEgressListener(user?.id!)
          .subscribe((items: any[]) =>
            this.store.dispatch(setItems({ items }))
          );
      });
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
    this.incomeEgressSub.unsubscribe();
  }
}
