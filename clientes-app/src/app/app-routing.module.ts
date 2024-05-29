import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivaComponent } from './directiva/directiva.component';
import { ClientesComponent } from './clientes/clientes.component';
import { FormComponent } from './clientes/form.component';

const routes: Routes = [
  {path: '', redirectTo: '/cliente', pathMatch: 'full'},
  {path: 'directiva', component: DirectivaComponent},
  {path: 'cliente', component: ClientesComponent},
  {path: 'cliente/cliente/form', component: FormComponent},
  {path: 'cliente/cliente/form/:id', component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
