import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {LoginI} from "../../modelos/login.interface";
import {Observable} from "rxjs";
import {ResponseI} from "../../modelos/response.interface";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "http://127.0.0.1:8000/api/login";
  constructor(private http:HttpClient) { }

  loginByEmail(form:LoginI):Observable<ResponseI>{
    let direccion = this.url + "auth";
    return this.http.post<ResponseI>(direccion, form);
  }
}
