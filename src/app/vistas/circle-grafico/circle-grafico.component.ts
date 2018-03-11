import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circle-grafico',
  templateUrl: './circle-grafico.component.html',
  styleUrls: ['./circle-grafico.component.scss']
})
export class CircleGraficoComponent implements OnInit {
  public chartType = 'doughnut';
  public chartData: Array<any> = [7258.8, 19000];

  public chartLabels: Array<any> = ['Ingresos', 'Consumos'];

  public chartColors: Array<any> = [{
      hoverBorderColor: ['rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)'],
      hoverBorderWidth: 0,
      backgroundColor: ['#F7464A', '#0072C9'],
      hoverBackgroundColor: ['#FF5A5E', '#5AD3D1']
  }];

  public chartOptions: any = {
          responsive: true
  };

  public chartClicked(e: any): void {}
  public chartHovered(e: any): void {}

  constructor() { }

  ngOnInit() {
  }

}
