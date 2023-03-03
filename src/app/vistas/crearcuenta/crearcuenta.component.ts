import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {ApiService} from "../../servicios/api/api.service";
import {CrearCuentaI} from '../../modelos/crearCuenta.interface';

@Component({
  selector: 'app-crearcuenta',
  templateUrl: './crearcuenta.component.html',
  styleUrls: ['./crearcuenta.component.css']
})
export class CrearcuentaComponent implements OnInit {

  crearForm = new FormGroup({
    username : new FormControl(''),
    password : new FormControl(''),
    rol : new FormControl('USER')
  })

  constructor(private api : ApiService, private router: Router) { }

  ngOnInit(): void {
  }



  postCrear(form :any){
    this.api.postCrearCuenta(form).subscribe(data =>{
      console.log(data);
    })
    window.location.href = "/login";
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


}
