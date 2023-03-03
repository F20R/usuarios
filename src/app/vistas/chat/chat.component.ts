import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../servicios/api/api.service";
import {Router} from "@angular/router";
import {ChatI} from "../../modelos/chat.interface";
import {FormControl, FormGroup} from "@angular/forms";

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

  constructor(private api : ApiService, private router:Router) { }

  ngOnInit(): void {
    this.obtenerDatos();
    this.obtenerDatos1()
  }


  obtenerDatos(){
    this.api.getChat().subscribe(resp => {
      this.chats = resp;
      console.log(this.chats)
    })
  }

  obtenerDatos1(){
    this.api.getChat().subscribe(resp => {
      this.chats1 = resp;
      console.log(this.chats1)
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
