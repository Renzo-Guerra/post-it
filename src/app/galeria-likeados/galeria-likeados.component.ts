import { Component, OnInit } from '@angular/core';
import { Publicacion } from '../interfaces/publicacion.interface';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-galeria-likeados',
  templateUrl: './galeria-likeados.component.html',
  styleUrls: ['./galeria-likeados.component.scss']
})
export class GaleriaLikeadosComponent implements OnInit {

  postsLikeados: Publicacion[] = [];

  constructor(private service: PostsService) {
  }

  ngOnInit(): void {
    this.service.publicaciones.subscribe(posts => {
      posts.forEach(post => {
        // En caso de que se encontrara la publicacion en la "db" (por el id), se actualizan los valores
        if(post.clickeado){
          let posicion = this.postsLikeados.indexOf(post);
          if(posicion < 0){
            this.postsLikeados.push(post);
          }
        }else{
          let posicion = this.postsLikeados.indexOf(post);
          if(posicion >= 0){
            this.postsLikeados.splice(posicion, 1);
          }
        }
      });
    });    
  }
}
