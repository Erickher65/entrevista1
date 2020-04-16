import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

import { Comentarios } from 'src/app/models/comentarios';
import { WebApiService } from 'src/app/services/web-api.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input('post') id:string;
  @Output() sd =new EventEmitter<string>()
  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private webApiService: WebApiService,
    private datePipe: DatePipe
  ) { }
  comentss: Comentarios[];
  myDate=Date.now();

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      if(params.has("id")){
        this.webApiService.obtenerComentarios(this.id).subscribe(comentss =>this.comentss= comentss)
      }
    })
  }
  sendDate(fecha:string){
    fecha=' '+ this.datePipe.transform(this.myDate,'yyyy, MMM, d');
    this.sd.emit(fecha);
  }
}
