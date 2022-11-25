import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// NgRx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ReactiveFormsModule } from '@angular/forms';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';

import { appReducers } from './app.reducer';

import { NgChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';

// Modules
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { IncomeEgressComponent } from './income-egress/income-egress.component';
import { DetailComponent } from './income-egress/detail/detail.component';
import { StatisticComponent } from './income-egress/statistic/statistic.component';
import { environment } from '../environments/environment';
import { SortIncomeEgressPipe } from './income-egress/pipes/sort-income-egress.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    IncomeEgressComponent,
    DetailComponent,
    StatisticComponent,
    SortIncomeEgressPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    AuthModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      autoPause: true,
    }),
    NgChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
