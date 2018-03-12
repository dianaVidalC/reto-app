import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA  } from '@angular/core';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider} from 'angular5-social-login';
import { Routes, RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { OWL_DATE_TIME_LOCALE } from 'ng-pick-datetime';

import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { VistasComponent } from './vistas/vistas.component';
import { ClusterService } from './cluster.service';
import { CircleGraficoComponent } from './vistas/circle-grafico/circle-grafico.component';
import { LinesGraficoComponent } from './vistas/lines-grafico/lines-grafico.component';
import { VistaComponent } from './vistas/vista/vista.component';
import { CuentasComponent } from './vistas/cuentas/cuentas.component';
import { AppRoutingModule } from './/app-routing.module';

export function getAuthServiceConfigs() {
  const config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('451807981901236')
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('108133021819-11r37mu0lofl5sh9p101eesacitqo3lt.apps.googleusercontent.com')
        },
      ]);
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VistasComponent,
    CircleGraficoComponent,
    LinesGraficoComponent,
    VistaComponent,
    CuentasComponent
  ],
  imports: [
    BrowserModule,
    SocialLoginModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    NgxCarouselModule,
    AppRoutingModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    BrowserAnimationsModule,
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  exports: [
    RouterModule
  ],
  providers: [
    { provide: AuthServiceConfig, useFactory: getAuthServiceConfigs },
    ClusterService,
    { provide: OWL_DATE_TIME_LOCALE, useValue: 'es'}

    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
