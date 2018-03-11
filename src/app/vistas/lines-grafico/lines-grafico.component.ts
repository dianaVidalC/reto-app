import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lines-grafico',
  templateUrl: './lines-grafico.component.html',
  styleUrls: ['./lines-grafico.component.scss']
})
export class LinesGraficoComponent {
  public chartType = 'line';
  public chartDatasets: Array<any> = [
      {data: [3629.40, 1000, 2629.40], label: 'Ingresos'},
      {data: [1000, 9000, 9000], label: 'Egresos'}
  ];

  public chartLabels: Array<any> = ['Jan', 'Feb', 'Mar'];

  public chartColors: Array<any> = [
    {
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: 'rgba(247, 70, 74, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(220,220,220,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(220,220,220,1)'
    },
    {
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: 'rgba(0, 114, 201, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(151,187,205,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(151,187,205,1)'
    }
  ];

  public chartOptions: any = { responsive: true };

  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
}
