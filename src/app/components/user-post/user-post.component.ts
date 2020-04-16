import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WebApiService } from 'src/app/services/web-api.service';
import { Post } from 'src/app/models/post';
import { Comentarios } from 'src/app/models/comentarios';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css']
})
export class UserPostComponent implements OnInit {

  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private webApiService: WebApiService
  ) { }
  posts: Post[];
  comentss: Comentarios[];
  idp:string
  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      if(params.has("id")){
        this.idp=params.get("id").toString();
        this.webApiService.obtenerPostPorUsuario(params.get("id")).subscribe(posts=>this.posts = posts);
        this.webApiService.obtenerComentarios(params.get("id")).subscribe(comentss =>this.comentss= comentss)
      }
    })
  }
  fechap:string=" "
  mostrarfecha(fecha:string){
    this.fechap='Last comment: '+fecha
  }
}
