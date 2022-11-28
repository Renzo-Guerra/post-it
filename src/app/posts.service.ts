import { BehaviorSubject, Observable } from 'rxjs';
import { Publicacion } from './interfaces/publicacion.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private _publicaciones: Publicacion[];
  private _publicaciones$: BehaviorSubject<Publicacion[]>;
  public publicaciones: Observable<Publicacion[]>;

  constructor() { 
    // No puedo hacer que la data persista cuando cambie de ruta, ya que el componente se vuelve a construir con la data preestablecida.
    console.log("Se construyó el service.");
    this._publicaciones$ = new BehaviorSubject<Publicacion[]>([]);
    this.publicaciones = this._publicaciones$.asObservable();
    
    this._publicaciones = [
      {
        id: 1,
        descripcion: "Descripcion 1",
        autor: "Autor 1",
        likes: 100,
        imagen: "/assets/imagenesGaleria/fondo1.jpg",
        clickeado: true,
      },
      {
        id: 2,
        descripcion: "Descripcion 2",
        autor: "Autor 2",
        likes: 45,
        imagen: "/assets/imagenesGaleria/fondo2.jpg",
        clickeado: false,
      },
      {
        id: 3,
        descripcion: "Descripcion 3",
        autor: "Autor 3",
        likes: 56,
        imagen: "/assets/imagenesGaleria/fondo3.jpg",
        clickeado: false,
      },
      {
        id: 4,
        descripcion: "Descripcion 4",
        autor: "Autor 4",
        likes: 23,
        imagen: "/assets/imagenesGaleria/fondo4.jpg",
        clickeado: false,
      },
      {
        id: 5,
        descripcion: "Descripcion 5",
        autor: "Autor 5",
        likes: 181,
        imagen: "/assets/imagenesGaleria/fondo5.jpg",
        clickeado: true,
      },
      {
        id: 6,
        descripcion: "Descripcion 6",
        autor: "Autor 6",
        likes: 533,
        imagen: "/assets/imagenesGaleria/fondo6.jpg",
        clickeado: true,
      },
      {
        id: 7,
        descripcion: "Descripcion 7",
        autor: "Autor 7",
        likes: 732,
        imagen: "/assets/imagenesGaleria/fondo7.jpg",
        clickeado: false,
      },
      {
        id: 8,
        descripcion: "Descripcion 8",
        autor: "Autor 8",
        likes: 655,
        imagen: "/assets/imagenesGaleria/fondo8.jpg",
        clickeado: false,
      },
      {
        id: 9,
        descripcion: "Descripcion 9",
        autor: "Autor 9",
        likes: 56,
        imagen: "/assets/imagenesGaleria/fondo9.jpg",
        clickeado: false,
      },
      {
        id: 10,
        descripcion: "Descripcion 10",
        autor: "Autor 10",
        likes: 65,
        imagen: "/assets/imagenesGaleria/fondo10.jpg",
        clickeado: false,
      },
      {
        id: 11,
        descripcion: "Descripcion 11",
        autor: "Autor 11",
        likes: 890,
        imagen: "/assets/imagenesGaleria/fondo11.jpg",
        clickeado: false,
      },
      {
        id: 12,
        descripcion: "Descripcion 12",
        autor: "Autor 12",
        likes: 112,
        imagen: "/assets/imagenesGaleria/fondo12.jpg",
        clickeado: true,
      },
      {
        id: 13,
        descripcion: "Descripcion 13",
        autor: "Autor 13",
        likes: 5544,
        imagen: "/assets/imagenesGaleria/fondo13.jpg",
        clickeado: false,
      },
      {
        id: 14,
        descripcion: "Descripcion 14",
        autor: "Autor 14",
        likes: 231,
        imagen: "/assets/imagenesGaleria/fondo14.jpg",
        clickeado: false,
      },
      {
        id: 15,
        descripcion: "Descripcion 15",
        autor: "Autor 15",
        likes: 1898,
        imagen: "/assets/imagenesGaleria/fondo15.jpg",
        clickeado: false,
      },
      {
        id: 16,
        descripcion: "Descripcion 16",
        autor: "Autor 16",
        likes: 121,
        imagen: "/assets/imagenesGaleria/fondo16.jpg",
        clickeado: true,
      },
      {
        id: 17,
        descripcion: "Descripcion 17",
        autor: "Autor 17",
        likes: 238,
        imagen: "/assets/imagenesGaleria/fondo17.jpg",
        clickeado: true,
      }
    ]
    this._publicaciones$.next(this._publicaciones);
  }

  ngOnInit(): void {
  }

  // Actualiza la info de la publicacion (des)likeada
  public likeado(publicacion: Publicacion): void{
    // Busco a la publicacion con el mismo id
    let encontrado = this._publicaciones.find(v1 => v1.id == publicacion.id);

    if(encontrado != undefined){
      // En caso de que se encontrara la publicacion en la "db" (por el id), se actualizan los valores
      let posicion = this._publicaciones.indexOf(encontrado);
      this._publicaciones[posicion] = encontrado;
      this._publicaciones$.next(this._publicaciones);
      console.log(this._publicaciones);
    }    
  }
}
