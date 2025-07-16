import { Component, OnInit } from '@angular/core';
import { ProductsummaryComponent } from './productsummary/productsummary.component';



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ProductsummaryComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  ngOnInit(): void {
  
  }

 
}
