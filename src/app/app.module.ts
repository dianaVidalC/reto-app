import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider} from 'angular5-social-login';
import { ChartsModule } from 'ng2-charts'; // gráficos
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { GraficosComponent } from './graficos/graficos.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'graficos', component: GraficosComponent }
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
    GraficosComponent
  ],
  imports: [
    BrowserModule,
    SocialLoginModule,
    ChartsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
