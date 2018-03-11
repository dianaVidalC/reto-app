import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA  } from '@angular/core';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider} from 'angular5-social-login';
import { Routes, RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { VistasComponent } from './vistas/vistas.component';
import { ClusterService } from './cluster.service';
import { CircleGraficoComponent } from './vistas/circle-grafico/circle-grafico.component';
import { LinesGraficoComponent } from './vistas/lines-grafico/lines-grafico.component';
import { VistaComponent } from './vistas/vista/vista.component';
import { CuentasComponent } from './vistas/cuentas/cuentas.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'vistas', component: VistasComponent },
  { path: 'cuentas', component: CuentasComponent }
];

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
    CuentasComponent,
  ],
  imports: [
    BrowserModule,
    SocialLoginModule,
    RouterModule.forRoot(routes),
    MDBBootstrapModule.forRoot(),
    HttpClientModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  exports: [
    RouterModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    },
    ClusterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
