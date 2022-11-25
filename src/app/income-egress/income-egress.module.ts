import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from '../dashboard/dashboard-routing.module';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { IncomeEgressComponent } from './income-egress.component';
import { DetailComponent } from './detail/detail.component';
import { StatisticComponent } from './statistic/statistic.component';
import { SortIncomeEgressPipe } from './pipes/sort-income-egress.pipe';
import { NgChartsModule } from 'ng2-charts';

import { StoreModule } from '@ngrx/store';
import { incomeEgressReducer } from './income-egress.reducer';

@NgModule({
  declarations: [
    DashboardComponent,
    IncomeEgressComponent,
    DetailComponent,
    StatisticComponent,
    SortIncomeEgressPipe,
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('incomeEgress', incomeEgressReducer),
    SharedModule,
    DashboardRoutingModule,
    NgChartsModule,
  ],
})
export class IncomeEgressModule {}
