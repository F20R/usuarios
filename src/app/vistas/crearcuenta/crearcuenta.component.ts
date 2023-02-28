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
    usuario : new FormControl(''),
    password : new FormControl('')
  })

  constructor(private api : ApiService, private router: Router) { }

  ngOnInit(): void {
  }



  postCrearCuenta(form :any){
    this.api.postCrearCuenta(form).subscribe(data =>{
      console.log(data);

    })
  }

  RedirectCrearCuenta(){
    this.router.navigate(['login'])
  }


}
