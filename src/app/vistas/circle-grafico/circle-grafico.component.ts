import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../../app-routing.module';
import { ClusterService } from '../../cluster.service';

@Component({
  selector: 'app-circle-grafico',
  templateUrl: './circle-grafico.component.html',
  styleUrls: ['./circle-grafico.component.scss']
})
export class CircleGraficoComponent implements OnInit {

  listaCta = [];
  listaTarj = [];
  saldos: number;
  gastos: number;

  public chartType = 'doughnut';
  public chartData: Array<any> = [7258.8, 14500];

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

  constructor( private clusterService: ClusterService ) {}

  ngOnInit() {
    this.getSumas();
  }

  getSumas(): void {
    this.clusterService.getListasCta()
    .subscribe(
        res => {
            this.listaCta = res;
            this.saldos = Number((this.listaCta.map(e => Number((e.SALDO).toString().replace(/\,/g, '')))
                          .reduce((a, b) => (a + b))).toFixed(1));
                          // console.log(this.saldos);
        },
        err => {
            console.log(err);
        }
    );
    this.clusterService.getListasTarj()
    .subscribe(
        res => {
            this.listaTarj = res;
            const limCred = (this.listaTarj.map(e => e.LIMITECREDITO)).toString().replace(/\,/g, '');
            const cred = (this.listaTarj.map(e => e.CREDITODISPONIBLE)).toString().replace(/\,/g, '');
            this.gastos = Number(limCred) - Number(cred);
            console.log(this.gastos);
        },
        err => {
            console.log(err);
        }
    );
  }
}
