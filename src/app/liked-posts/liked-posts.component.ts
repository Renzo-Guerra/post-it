import { PostsService } from './../posts.service';
import { Component, OnInit } from '@angular/core';
import { Publicacion } from '../interfaces/publicacion.interface';

@Component({
  selector: 'app-liked-posts',
  templateUrl: './liked-posts.component.html',
  styleUrls: ['./liked-posts.component.scss']
})
export class LikedPostsComponent implements OnInit {
  postsLikeados: Publicacion[] = [];

  constructor(private service: PostsService) {
    console.log("Entre");
  }

  ngOnInit(): void {
    this.service.publicaciones.subscribe(posts => {
      posts.forEach(post => {
        if(post.clickeado){
          this.postsLikeados.push(post);
        }
      });
    });
  }

}
