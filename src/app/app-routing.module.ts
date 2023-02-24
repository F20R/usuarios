import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./vistas/login/login.component";
import {NuevoComponent} from "./vistas/nuevo/nuevo.component";
import {DashboardComponent} from "./vistas/dashboard/dashboard.component";
import {ChatComponent} from "./vistas/chat/chat.component";
import {CrearcuentaComponent} from "./vistas/crearcuenta/crearcuenta.component";
import {ContactoComponent} from "./vistas/contacto/contacto.component";

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:"full"},
  {path:'login', component:LoginComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'nuevo', component:NuevoComponent},
  {path:'chat', component:ChatComponent},
  {path:'crearCuenta', component:CrearcuentaComponent},
  {path:'contacto', component:ContactoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, DashboardComponent, NuevoComponent]
