import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WebApiService } from 'src/app/services/web-api.service';

import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private webApiService: WebApiService
  ) { }
  posts: Post[];
  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      if(params.has("id")){
        this.webApiService.obtenerPostPorUsuario(params.get("id")).subscribe(posts=>this.posts = posts);
      }else{
        this.webApiService.obtenerPosts().subscribe(posts=>this.posts=posts);
      }
    })
  }
  verPosts(id:number){
    this.router.navigate(["/posts",id])
  }

}
