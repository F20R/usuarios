import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./vistas/login/login.component";
import {EditarComponent} from "./vistas/editar/editar.component";
import {NuevoComponent} from "./vistas/nuevo/nuevo.component";
import {DashboardComponent} from "./vistas/dashboard/dashboard.component";

const routes: Routes = [
  {path:'', redirectTo:'dashboard', pathMatch:"full"},
  {path:'login', component:LoginComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'nuevo', component:NuevoComponent},
  {path:'editar', component:EditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, DashboardComponent, NuevoComponent, EditarComponent]
