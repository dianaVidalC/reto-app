import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.scss']
})
export class CuentasComponent implements OnInit {
  public show = false;

  public carouselOne: NgxCarousel;
  public selectedMoment = new Date();
  ngOnInit() {
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
    public myfunc(event: Event) {
     // carouselLoad will trigger this funnction when your load value reaches
     // it is helps to load the data by parts to increase the performance of the app
     // must use feature to all carousel
  }
  constructor(private renderer: Renderer2) { }

  showCalendar() {
    this.show = !this.show;
  }
}
