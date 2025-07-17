import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransactionHistoryComponent } from './dashboard/transaction-history/transaction-history.component';
import { ChartsComponent } from './charts/charts.component';

export const routes: Routes = [
    {path:'dashboard',component:DashboardComponent},
    {path:'transaction',component:TransactionHistoryComponent},
    {path :'charts',component:ChartsComponent},
    {path: '', component:DashboardComponent}
];
