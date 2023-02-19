import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from "@angular/forms";
import {ApiService} from "../../servicios/api/api.service";
import {LoginI} from "../../modelos/login.interface";
import {ResponseI} from "../../modelos/response.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  constructor(private api:ApiService, private router:Router) {}


  onLogin(form:LoginI){
    this.api.loginByUsername(form).subscribe(data=>{
    console.log(data);
    let dataResponse:ResponseI = data;
    if (dataResponse.status){
      localStorage.setItem('token', dataResponse.token);
      this.router.navigate(["/"]);
    }
    });

  }
}
