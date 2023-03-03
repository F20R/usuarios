import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {LoginI} from "../../modelos/login.interface";
import {Observable} from "rxjs";
import {ResponseI} from "../../modelos/response.interface";
import {listaContactoI} from '../../modelos/listaContacto.interface';
import {ContactoI} from '../../modelos/contacto.interface';
import {ChatI} from "../../modelos/chat.interface";
import {CrearCuentaI} from "../../modelos/crearCuenta.interface";
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

  eliminarContacto(from : ContactoI):Observable<ResponseI>{
    let direccion = this.url + 'api/contacto/delete';
    let Options = {
      headers: new HttpHeaders({
        'content-type' : 'application/json'
      }),
      body:from
    }
    return this.http.delete<ResponseI>(direccion,Options);
  }

  postContacto(form : ContactoI) : Observable<ResponseI>{
    let direccion = this.url + 'api/contacto/save';
    return this.http.post<ResponseI>(direccion,form);
  }

  getChat():Observable<ChatI[]>{
    let direccion = this.url + 'api/chat/list';
    return this.http.get<ChatI[]>(direccion)
  }

  postCrearCuenta(form : CrearCuentaI) : Observable<ResponseI>{
    let direccion = this.url + 'api/usuario/save';
    return this.http.post<ResponseI>(direccion,form);
  }

  postChat1(form : ChatI) : Observable<ResponseI>{
    let direccion = this.url + 'api/chat/save';
    return this.http.post<ResponseI>(direccion,form);
  }


}
