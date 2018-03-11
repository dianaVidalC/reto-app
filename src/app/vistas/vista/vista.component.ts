import { Component, OnInit } from '@angular/core';
import { ClusterService } from '../../cluster.service';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.scss']
})
export class VistaComponent implements OnInit {

  datos: any = [];

  constructor( private clusterService: ClusterService ) {}

  ngOnInit() {
      this.getClusters();
  }

  getClusters(): void {
      this.clusterService.getClusters().subscribe(
          res => {
              this.datos = res['DATA'];
              console.log(this.datos.LISTA_CTA[0].SALDO);
          },
          err => {
              console.log(err);
          }
      );
  }

}
