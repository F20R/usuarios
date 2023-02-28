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

  chatForm = new FormGroup({
    mensaje : new FormControl('')
  })

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

  postChat(form :any){
    this.api.postChat(form).subscribe(data =>{
      console.log(data);

    })
  }

  ListarChat : ChatI[] = [];

}
