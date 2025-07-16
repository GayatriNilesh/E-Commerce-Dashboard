import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { TransactionHistoryComponent } from '../transaction-history/transaction-history.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-productsummary',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule,
    FormsModule, MatInputModule, MatButtonModule, CommonModule, TransactionHistoryComponent,
  ],
  templateUrl: './productsummary.component.html',
  styleUrl: './productsummary.component.css'
})

export class ProductsummaryComponent implements OnInit {
  productList!: any;
  searchValue!: string;
  filteredProducts!: any;
  isToggled: any=true;
  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.filterProducts()
  }
  filterProducts() {
    this.filteredProducts = this.productList;
    this.dataService.searchiInputObs.subscribe(filterList => {
      if (filterList) {
        this.productList = this.productList.filter((product: any) =>
          product.category.toLowerCase().includes(filterList.toLowerCase())
        );
      }
      else {
        this.getProductSummaryDetails();
      }
    }
    )
  }
  getProductSummaryDetails() {
    this.dataService.fetchProducts().subscribe(data => {
      this.productList = data;
    })
  }
  }

