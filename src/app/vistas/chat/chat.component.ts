import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../servicios/api/api.service";
import {Router} from "@angular/router";
import {ChatI} from "../../modelos/chat.interface";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  chats:any;

  constructor(private api : ApiService, private router:Router) { }

  ngOnInit(): void {
    this.obtenerDatos()
  }


  obtenerDatos(){
    this.api.getChat().subscribe(resp => {
      this.chats = resp;
      console.log(this.chats)
    })
  }

  ListarChat : ChatI[] = [];

}
