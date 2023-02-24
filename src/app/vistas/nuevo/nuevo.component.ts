import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ContactoI} from '../../modelos/contacto.interface';
import {ResponseI} from '../../modelos/response.interface';
import {ApiService} from '../../servicios/api/api.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit{

  nuevoForm = new FormGroup({
    nombre : new FormControl(''),
    nombreUsuario : new FormControl(''),
    telefono : new FormControl(''),
    usuario : new FormControl('')
  })

  constructor(private api : ApiService, private router: Router) {
  }


  ngOnInit(): void {

  }

  postForm(form :any){
    this.api.postContacto(form).subscribe(data =>{
      console.log(data);

    })
  }

  RedirectListaContacto(){
    this.router.navigate(['contacto'])
  }

}
