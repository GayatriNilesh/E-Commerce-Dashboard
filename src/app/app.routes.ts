import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransactionHistoryComponent } from './dashboard/transaction-history/transaction-history.component';
import { BarchartComponent } from './charts/barchart/barchart.component';

export const routes: Routes = [
    {path:'dashboard',component:DashboardComponent},
    {path:'transaction',component:TransactionHistoryComponent},
    {path :'charts',component:BarchartComponent},
    {path: '', component:DashboardComponent}
];
