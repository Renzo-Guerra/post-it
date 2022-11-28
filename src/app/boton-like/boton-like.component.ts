import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Publicacion } from '../interfaces/publicacion.interface';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-boton-like',
  templateUrl: './boton-like.component.html',
  styleUrls: ['./boton-like.component.scss']
})
export class BotonLikeComponent implements OnInit {
  @Input() clickeado: boolean = false;
  @Input() likes: number = 0;
  /**
   * El service me rompio la abstraccion del boton, debido a que para comunicar la publicacion con el service le tenia que pasar la publicacion, 
   * pero el "trigger" es el boton, el cual es un componente a parte, me fui obligado a pasarle al boton el "padre" (la Publicacion).
   */
  @Input() publicacion!: Publicacion; 
  
  // Le resta o le suma 1 a la cantidad original del componente
  @Output() likesChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() clickeadoChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private service : PostsService) { }

  ngOnInit(): void {
  }

  likear(): void {
    if(this.clickeado){
      this.clickeado = false;
      this.likes--;
    }else{
      this.clickeado = true;
      this.likes++;
    }

    this.clickeadoChange.emit(this.clickeado);
    this.likesChange.emit(this.likes);
    this.service.likeado(this.publicacion);
  }
}
