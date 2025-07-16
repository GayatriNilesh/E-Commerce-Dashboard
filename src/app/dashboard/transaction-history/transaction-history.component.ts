import { Component, Input, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { DataService } from '../../services/data.service';
export interface ProductTransactionData {
  id: number
  title: string;
  category: string;
  weight: number;
  price: string;
  availabilityStatus: string;
}

@Component({
  selector: 'app-transaction-history',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './transaction-history.component.html',
  styleUrl: './transaction-history.component.css'
})
export class TransactionHistoryComponent implements OnInit {
  transactionData: any;
  displayedColumns: string[] = ['id', 'title', 'category', 'weight', 'price', 'availabilityStatus'];
  dataSource: any;
  constructor(private dataService: DataService) {

  }
  ngOnInit(): void {
    this.getProductSummaryDetails();
    this.filterProducts();
  }

  filterProducts() {
    this.dataService.searchiInputObs.subscribe(filterList => {
      if (filterList) {
        this.transactionData = this.transactionData.filter((product: any) =>
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
      this.transactionData = data;
    })
  }

}
