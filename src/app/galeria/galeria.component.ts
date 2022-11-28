import { PostsService } from './../posts.service';
import { Component, OnInit } from '@angular/core';
import { Publicacion } from '../interfaces/publicacion.interface';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})

export class GaleriaComponent implements OnInit {

  public publicaciones: Publicacion[] = []; 
  
  constructor(private elementos: PostsService) { 
    this.elementos.publicaciones.subscribe(posts => this.publicaciones = posts);
  }

  ngOnInit(): void {}  
}
