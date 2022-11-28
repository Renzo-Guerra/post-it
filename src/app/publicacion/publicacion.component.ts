import { Component, Input, OnInit } from '@angular/core';
import { Publicacion } from '../interfaces/publicacion.interface';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.scss']
})
export class PublicacionComponent implements OnInit {

  @Input()
  dataEntrante: Publicacion;

  constructor() { 
    // Esto es en caso de que "dataEntrante venga vacio".
    this.dataEntrante = {
      id: 0,
      descripcion: "descripcion default",
      autor: "autor default",
      likes: 0,
      imagen: "/assets/imagenesGaleria/error.png",
      clickeado: false,
    }
  }
  
  ngOnInit(): void {
  }
}
