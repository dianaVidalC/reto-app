import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ClusterService {

  private clustersUrl = 'https://api.myjson.com/bins/17a7z1?pretty=1';

  constructor( public http: HttpClient ) { }

  getClusters(): Observable<any> {
    return this.http.get(this.clustersUrl);
  }
}