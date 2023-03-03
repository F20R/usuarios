import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './plantillas/header/header.component';
import { FooterComponent } from './plantillas/footer/footer.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ChatComponent} from './vistas/chat/chat.component';
import {CrearcuentaComponent} from './vistas/crearcuenta/crearcuenta.component';
import { ContactoComponent } from './vistas/contacto/contacto.component';
import { InicioComponent } from './vistas/inicio/inicio.component';
import { BinicioComponent } from './vistas/binicio/binicio.component';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ChatComponent,
    CrearcuentaComponent,
    routingComponents,
    ContactoComponent,
    InicioComponent,
    BinicioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
