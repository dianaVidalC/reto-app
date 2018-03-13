import { Component, OnInit } from '@angular/core';
import { ClusterService } from '../../cluster.service';
import { AppRoutingModule } from '../../app-routing.module';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.scss']
})
export class VistaComponent implements OnInit {

  listaCta = [];
  listaTarj = [];
  gastos: number;
  constructor( private clusterService: ClusterService ) {}

  ngOnInit() {
      this.getListas();
      this.getGastos();
  }
  getListas(): void {
      this.clusterService.getListasTarj()
      .subscribe(
          res => {
              this.listaCta = res;
          },
          err => {
              console.log(err);
          }
      );
  }
  getGastos(): void {
    this.clusterService.getListasTarj()
    .subscribe(
        res => {
            this.listaTarj = res;
            const limCred = (this.listaTarj.map(e => e.LIMITECREDITO)).toString().replace(/\,/g, '');
            const cred = (this.listaTarj.map(e => e.CREDITODISPONIBLE)).toString().replace(/\,/g, '');
            this.gastos = Number(limCred) - Number(cred);
        },
        err => {
            console.log(err);
        }
    );
}

}
