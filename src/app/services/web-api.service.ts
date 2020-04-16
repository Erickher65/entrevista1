import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Post } from '../models/post';
import { Comentarios } from '../models/comentarios';

@Injectable({
  providedIn: 'root'
})
export class WebApiService {
  baseURLPosts=environment.apiURL+'posts/'
  baseURLComments=environment.apiURL+'comments/'
  constructor(private http:HttpClient) { }
  obtenerPosts():Observable<Post[]>{
    return this.http.get<Post[]>(this.baseURLPosts);
  }
 
  obtenerPostPorUsuario(id:string):Observable<Post[]>{
    const url=`${this.baseURLPosts}?id=${id}`;
    return this.http.get<Post[]>(url)
  }

  obtenerComentarios(id:string):Observable<Comentarios[]>{
    const url=`${this.baseURLComments}?postId=${id}`;
    return this.http.get<Comentarios[]>(url)
  }
}
