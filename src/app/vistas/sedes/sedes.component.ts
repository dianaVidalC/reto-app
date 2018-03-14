import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { ClusterService } from '../../cluster.service';

interface Marker {
  lat: number;
  lng: number;
  draggable: boolean;
  }

@Component({
  selector: 'app-sedes',
  templateUrl: './sedes.component.html',
  styleUrls: ['./sedes.component.scss']
})
export class SedesComponent implements OnInit {
  lat = 51.678418;
  lng = 7.809007;

  constructor(private clusterService: ClusterService) { }
  data: Marker[];

  ngOnInit() {
    this.getUbicaciones();
  }
  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
  }

  mapClicked($event: MouseEvent) {
    this.data.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }
  markerDragEnd(m: Marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
  getUbicaciones(): void {
    this.clusterService.getUbicacion().subscribe(
      res => {
         this.data = res.map(e => {
          const resMakers = {
            lat: e.Latitude,
            lng: e.Longitude,
            draggable: true
          };
          console.log(resMakers);
          return resMakers;
         });
         console.log(this.data);
      },
      err => {
        console.log(err);
      }
    );
  }
}

