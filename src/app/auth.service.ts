import { Injectable } from '@angular/core';
import {LoginI} from "./modelos/login.interface";
import {ResponseI} from "./modelos/response.interface";
import {ApiService} from "./servicios/api/api.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private api:ApiService, private router:Router) { }

  logout(): void {
    localStorage.removeItem("token");
    this.router.navigate(['login']);
  }



}
