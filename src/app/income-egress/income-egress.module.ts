import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { IncomeEgressComponent } from './income-egress.component';
import { DetailComponent } from './detail/detail.component';
import { StatisticComponent } from './statistic/statistic.component';
import { SortIncomeEgressPipe } from './pipes/sort-income-egress.pipe';
import { SharedModule } from '../shared/shared.module';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    DashboardComponent,
    IncomeEgressComponent,
    DetailComponent,
    StatisticComponent,
    SortIncomeEgressPipe,
  ],
  imports: [CommonModule, SharedModule, NgChartsModule],
})
export class IncomeEgressModule {}
