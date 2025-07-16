import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartData } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-barchart',
  standalone: true,
  imports: [NgChartsModule],
  templateUrl: './barchart.component.html',
  styleUrl: './barchart.component.css'
})
export class BarchartComponent implements OnInit {
  productList: any;
   categoryRatings:any={};
   public barChartType = 'bar' as const;

  public barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
      x: {},
      y: {
        beginAtZero: true,
      },
    },
  };

  public barChartData: ChartData<'bar'> = {
    labels: ['Beauty', 'groceries', 'furniture', 'fragrances'],
    datasets: [
      {
        label: 'Beauty',
        data: [2,4,5,6],
        backgroundColor: '#42A5F5',
      },
      {
        label: 'food',
        data: [5,6,8,7],
        backgroundColor: '#66BB6A',
      },
      {
        label: 'furniture',
        data: [6,7,8,4],
        backgroundColor: '#0e95b4ff',
      },
      {
        label: 'fragrances',
        data: [30, 45, 80, 60],
        backgroundColor: '#e3ace8ff',
      },
    ],
  };
  constructor() {

  }
  ngOnInit(): void {
  }

  

}

