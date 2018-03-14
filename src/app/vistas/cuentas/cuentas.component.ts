import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';
import { ClusterService } from '../../cluster.service';
import { SocialService } from '../../social.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.scss']
})
export class CuentasComponent implements OnInit {
  data: any;
  public listaMovimientos = [];
  public show = false;

  public carouselOne: NgxCarousel;
  public selectedMoment = new Date();
  public myfunc(event: Event) {
    // carouselLoad will trigger this funnction when your load value reaches
    // it is helps to load the data by parts to increase the performance of the app
    // must use feature to all carousel
}
  constructor(private renderer: Renderer2, public cluster: ClusterService, public social: SocialService) { }

  ngOnInit() {
    this.data = (this.social.authService['_user']);
    this.movimientos();
    this.carouselOne = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 400,
      interval: 4000,
      point: {
        visible: false
      },
      load: 2,
      touch: true,
      loop: false,
      animation: 'lazy',
      custom: 'banner'
    };
  }
  showCalendar() {
    this.show = !this.show;
  }
  formatoNumber(num) {
    return num.toString().replace(/\-/g, '');
  }
  movimientos() {
    this.cluster.getMovimientos()
    .subscribe(
      res => {
        this.listaMovimientos = res;
        this.listaMovimientos = this.listaMovimientos.map(e => e.MOVIMIENTOS);
        this.listaMovimientos[0].map(e => e.MONTO.toString().replace(/\-/g, ''));
        console.log(this.listaMovimientos);
      },
      err => {
          console.log(err);
      }
    );
  }
}
