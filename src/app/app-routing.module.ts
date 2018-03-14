import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { VistasComponent } from './vistas/vistas.component';
import { CuentasComponent } from './vistas/cuentas/cuentas.component';
import { SedesComponent } from './vistas/sedes/sedes.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'vistas', component: VistasComponent },
  { path: 'cuentas', component: CuentasComponent },
  { path: 'sedes', component: SedesComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
