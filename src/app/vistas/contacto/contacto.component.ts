import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../servicios/api/api.service'
import {Router} from '@angular/router'

import {listaContactoI} from '../../modelos/listaContacto.interface'
import {ContactoI} from "../../modelos/contacto.interface";
import {HttpClient} from "@angular/common/http";
import {LoginI} from "../../modelos/login.interface";
import {ResponseI} from "../../modelos/response.interface";

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit{

  contactos:any;

  constructor(private api : ApiService, private router:Router, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.obtenerDatos();
  }
  obtenerDatos(){
    this.api.getAllContactos().subscribe(resp => {
        this.contactos = resp;
        console.log(this.contactos)
      })
  }

  Redirect(){
    this.router.navigate(['chat'])
  }

  eliminarUser={
    'id':'18'
  }
  eliminar(){

    const body = JSON.stringify({
      'id': this.eliminarUser.id
    })
    this.http.delete('http://127.0.0.1:8000/api/contacto/delete', {body} ).subscribe()

  }

  nuevoContacto(){
    this.router.navigate(['nuevo'])
  }

  RedirectCrearCuenta(){
    this.router.navigate(['login'])
  }

  RedirectCrearCuenta1(){
    this.router.navigate(['crearCuenta'])
  }

  RedirectContactos(){
    this.router.navigate(['contacto'])
  }


  logout(){
    localStorage.removeItem("token");
    this.router.navigate(['login']);
  }



}
