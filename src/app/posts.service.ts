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
        clickeado: false,
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
