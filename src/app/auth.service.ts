import { Injectable } from '@angular/core';
import {LoginI} from "./modelos/login.interface";
import {ResponseI} from "./modelos/response.interface";
import {ApiService} from "./servicios/api/api.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private api:ApiService, private router:Router,private http: HttpClient, private authService:AuthService) { }

  getToken(){
    return localStorage.getItem('token')
  }

  logout(): void {
    localStorage.removeItem("token");
    this.router.navigate(['login']);
  }



}
