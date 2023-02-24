import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {LoginI} from "../../modelos/login.interface";
import {Observable} from "rxjs";
import {ResponseI} from "../../modelos/response.interface";
import {listaContactoI} from '../../modelos/listaContacto.interface';
import {ContactoI} from '../../modelos/contacto.interface';
@Injectable({
  providedIn: 'root'
})
export class ApiService {


  url:string = "http://127.0.0.1:8000/";
  constructor(private http:HttpClient) { }

  loginByUsername(form:LoginI):Observable<ResponseI>{
    let direccion = this.url + 'api/login/auth';
    return this.http.post<ResponseI>(direccion , form);
  }

  getAllContactos():Observable<listaContactoI[]>{
    let direccion = this.url + 'api/contacto/list';
    return this.http.get<listaContactoI[]>(direccion)
  }

}
