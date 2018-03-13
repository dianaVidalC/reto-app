import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap, filter } from 'rxjs/operators';

/* export interface ListaCta {
  ncuenta: number;
  tipo_cta: string;
  saldo: number;
  moneda: string;
} */
export interface ListaTarj {
  numeroTarj: number;
  tipoTarj: string;
  credito: number;
  limiteCred: number;
  currency: string;
  class: string;
}
export interface UserData {
  email: string;
  id: string;
  idtoken: string;
  imagen: string;
  name: string;
  provider: string;
  token: string;
}

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ClusterService {

  private listasUrl = 'https://api.myjson.com/bins/17a7z1?pretty=1';
  private movimientosUrl = 'https://api.myjson.com/bins/qmxwd?pretty=1';
  private ubicacionUrl = 'https://api.myjson.com/bins/1eva7x?pretty=1';

  constructor( public http: HttpClient ) { }

  getListasCta(): Observable<any> {
    return this.http.get(this.listasUrl)
    .pipe(
      map(e => e['DATA']),
      map(e => e.LISTA_CTA),
    );
  }
  getListasTarj(): Observable<any> {
    return this.http.get(this.listasUrl)
    .pipe(
      map(e => e['DATA']),
      map(e => e.LISTA_TARJ),
    );
  }
  getMovimientos(): Observable<any> {
    return this.http.get(this.movimientosUrl);
  }
  getUbicacion(): Observable<any> {
    return this.http.get(this.ubicacionUrl);
  }
}
