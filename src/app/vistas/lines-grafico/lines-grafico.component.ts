import { Component, OnInit } from '@angular/core';
import { ClusterService } from '../../cluster.service';

@Component({
  selector: 'app-lines-grafico',
  templateUrl: './lines-grafico.component.html',
  styleUrls: ['./lines-grafico.component.scss']
})
export class LinesGraficoComponent implements OnInit {
  listaCta = [];
  listaTarj = [];
  saldos = [];

  public chartType = 'line';
  public chartDatasets: Array<any> = [
      {data:  [3629.40, 1000, 2629.40], label: 'Ingresos'},
      {data: [1500, 5000, 8000], label: 'Egresos'}
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

  constructor( private clusterService: ClusterService ) {}
    ngOnInit() {
      this.getListas();
    }
    getListas(): void {
      this.clusterService.getListasCta()
      .subscribe(
          res => {
              this.listaCta = res;
              this.listaCta.map(e => (e.SALDO).toString().replace(/\,/g, ''))
                            .forEach(e => (this.saldos).push(Number(e)));
          },
          err => {
              console.log(err);
          }
      );
    }
  }
