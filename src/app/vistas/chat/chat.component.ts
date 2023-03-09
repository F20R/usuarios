import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../servicios/api/api.service";
import {Router} from "@angular/router";
import {ChatI} from "../../modelos/chat.interface";
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../auth.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  chats:any;
  chats1 : any;

  chatForm = new FormGroup({
    mensaje : new FormControl(''),
    emisor : new FormControl('jcarirojas1'),
    receptor : new FormControl('antoniogp'),
    fecha : new FormControl('')
  })

  chatForm1 = new FormGroup({
    mensaje : new FormControl(''),
    emisor : new FormControl('antoniogp'),
    receptor : new FormControl('jcarirojas1'),
    fecha : new FormControl('')
  })

  constructor(private api : ApiService, private router:Router, private http: HttpClient, private authService:AuthService) { }

  ngOnInit(): void {
    this.obtenerDatos();
  }


  obtenerDatos(){
    this.api.getChat().subscribe(resp => {
      this.chats = resp;
      console.log(this.chats)
    })
  }

  postChat(form :any){
    this.api.postChat1(form).subscribe(data =>{
      console.log(data);
      this.router.navigate(['contacto']);

    })
  }

  ListarChat : ChatI[] = [];

}
