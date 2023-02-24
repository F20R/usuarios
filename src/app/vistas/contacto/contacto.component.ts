import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../servicios/api/api.service'
import {Router} from '@angular/router'

import {listaContactoI} from '../../modelos/listaContacto.interface'

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit{

  contactos:any;

  constructor(private api : ApiService, private router:Router) {
  }

  ngOnInit(): void {
    this.obtenerDatos()
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

}
