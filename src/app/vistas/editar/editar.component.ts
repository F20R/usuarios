import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class editarComponent implements OnInit{


  constructor(private activerouter: ActivatedRoute, private router:Router) {
  }

  ngOnInit(): void {
    let contactoNombre = this.activerouter.snapshot.paramMap.get('nombre');
    let token = this.getToken()
    console.log(token);
  }

  getToken(){
    return localStorage.getItem('token');
  }


}
