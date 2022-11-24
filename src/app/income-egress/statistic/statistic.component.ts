import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { IincomeEgress } from 'src/interfaces/income-egress.interface';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss'],
})
export class StatisticComponent implements OnInit {
  totalIncome: number = 0;
  totalEgress: number = 0;
  totalItemsIncome: number = 0;
  totalItemsEgress: number = 0;
  difference: number = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select('incomeEgress')
      .subscribe(({ items }) => this.generateStatistics(items));
  }

  generateStatistics(items: IincomeEgress[]) {
    const total = items.reduce(
      (acc, elem) => {
        if (elem.type == '1') {
          this.totalItemsIncome++;
          acc.totalIncome += elem.amount;
        }
        if (elem.type == '2') {
          this.totalItemsEgress++;
          acc.totalEgress += elem.amount;
        }
        return { ...acc };
      },
      { totalIncome: 0, totalEgress: 0 }
    );
    this.totalIncome = total.totalIncome;
    this.totalEgress = total.totalEgress;

    this.difference = this.totalIncome - this.totalEgress;
  }
}
