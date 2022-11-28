import { BehaviorSubject, Observable } from 'rxjs';
import { Publicacion } from './interfaces/publicacion.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private _publicaciones: Publicacion[];
  private _publicaciones$: BehaviorSubject<Publicacion[]>;
  public publicaciones: Observable<Publicacion[]>;

  constructor() {
    // No puedo hacer que la data persista cuando cambie de ruta, ya que el componente se vuelve a construir con la data preestablecida.
    console.log('Se construyó el service.');
    this._publicaciones$ = new BehaviorSubject<Publicacion[]>([]);
    this.publicaciones = this._publicaciones$.asObservable();

    this._publicaciones = [
      {
        id: 1,
        descripcion:
          'La vida es una aventura que tenemos el privilegio de disfrutar.',
        autor: 'prettycorner',
        likes: 100,
        imagen:
          'https://raw.githubusercontent.com/Renzo-Guerra/post-it/main/src/assets/imagenesGaleria/fondo1.jpg',
        clickeado: true,
      },
      {
        id: 2,
        descripcion:
          'La dicha de la vida consiste en tener siempre algo que hacer, alguien a quien amar y alguna cosa que esperar.',
        autor: 'cinnamon.cookie',
        likes: 45,
        imagen:
          'https://raw.githubusercontent.com/Renzo-Guerra/post-it/main/src/assets/imagenesGaleria/fondo2.jpg',
        clickeado: false,
      },
      {
        id: 3,
        descripcion:
          'La vida es como una caja de bombones nunca sabes lo que te va a tocar.',
        autor: 'enigmaniac',
        likes: 56,
        imagen:
          'https://raw.githubusercontent.com/Renzo-Guerra/post-it/main/src/assets/imagenesGaleria/fondo3.jpg',
        clickeado: false,
      },
      {
        id: 4,
        descripcion:
          'A veces es necesario cambiar de ruta para llegar a nuestro destino.',
        autor: 'incubuzz',
        likes: 23,
        imagen:
          'https://raw.githubusercontent.com/Renzo-Guerra/post-it/main/src/assets/imagenesGaleria/fondo4.jpg',
        clickeado: false,
      },
      {
        id: 5,
        descripcion:
          'Cometer errores en la vida no solo es honorable, es más útil que no hacer nada.',
        autor: 'scentaurus',
        likes: 181,
        imagen:
          'https://raw.githubusercontent.com/Renzo-Guerra/post-it/main/src/assets/imagenesGaleria/fondo5.jpg',
        clickeado: true,
      },
      {
        id: 6,
        descripcion: 'Un día sin reír es un día perdido.',
        autor: 'zetapiruleta',
        likes: 533,
        imagen:
          'https://raw.githubusercontent.com/Renzo-Guerra/post-it/main/src/assets/imagenesGaleria/fondo6.jpg',
        clickeado: true,
      },
      {
        id: 7,
        descripcion: 'Si amas la vida, la vida te amará',
        autor: 'incubuzz',
        likes: 732,
        imagen:
          'https://raw.githubusercontent.com/Renzo-Guerra/post-it/main/src/assets/imagenesGaleria/fondo7.jpg',
        clickeado: false,
      },
      {
        id: 8,
        descripcion:
          'Somos lo que pensamos. Nos convertimos en nuestros pensamientos.',
        autor: 'incubuzz',
        likes: 655,
        imagen:
          'https://raw.githubusercontent.com/Renzo-Guerra/post-it/main/src/assets/imagenesGaleria/fondo8.jpg',
        clickeado: false,
      },
      {
        id: 9,
        descripcion:
          'Hacen falta días malos para darte cuenta de lo bonitos que son el resto.',
        autor: 'scentaurus',
        likes: 56,
        imagen:
          'https://raw.githubusercontent.com/Renzo-Guerra/post-it/main/src/assets/imagenesGaleria/fondo9.jpg',
        clickeado: false,
      },
      {
        id: 10,
        descripcion:
          'Éste es el secreto de la felicidad y la virtud: amar lo que uno tiene que hacer.',
        autor: 'ohmmelette',
        likes: 65,
        imagen:
          'https://raw.githubusercontent.com/Renzo-Guerra/post-it/main/src/assets/imagenesGaleria/fondo10.jpg',
        clickeado: false,
      },
      {
        id: 11,
        descripcion:
          'El sentido de la vida es tener valores, no cosas de valor.',
        autor: 'alteroid',
        likes: 890,
        imagen:
          'https://raw.githubusercontent.com/Renzo-Guerra/post-it/main/src/assets/imagenesGaleria/fondo11.jpg',
        clickeado: false,
      },
      {
        id: 12,
        descripcion: 'Hay un punto de luz en cada nube de tormenta.',
        autor: 'irrelephant',
        likes: 112,
        imagen:
          'https://raw.githubusercontent.com/Renzo-Guerra/post-it/main/src/assets/imagenesGaleria/fondo12.jpg',
        clickeado: true,
      },
      {
        id: 13,
        descripcion: 'Vivimos en un arcoíris de caos.',
        autor: 'colosogoloso',
        likes: 5544,
        imagen:
          'https://raw.githubusercontent.com/Renzo-Guerra/post-it/main/src/assets/imagenesGaleria/fondo13.jpg',
        clickeado: false,
      },
      {
        id: 14,
        descripcion: 'La felicidad puede existir solo en la aceptación.',
        autor: 'laescaloneta',
        likes: 231,
        imagen:
          'https://raw.githubusercontent.com/Renzo-Guerra/post-it/main/src/assets/imagenesGaleria/fondo14.jpg',
        clickeado: false,
      },
      {
        id: 15,
        descripcion: 'El hombre es libre en el momento en el que desea serlo.',
        autor: 'cinnamon.cookie',
        likes: 1898,
        imagen:
          'https://raw.githubusercontent.com/Renzo-Guerra/post-it/main/src/assets/imagenesGaleria/fondo15.jpg',
        clickeado: false,
      },
      {
        id: 16,
        descripcion: 'El débil nunca puede perdonar.',
        autor: 'arteyparty',
        likes: 121,
        imagen:
          'https://raw.githubusercontent.com/Renzo-Guerra/post-it/main/src/assets/imagenesGaleria/fondo16.jpg',
        clickeado: true,
      },
      {
        id: 17,
        descripcion: 'Lo que no nos mata nos hace más fuertes.',
        autor: 'cinnamon.cookie',
        likes: 238,
        imagen:
          'https://raw.githubusercontent.com/Renzo-Guerra/post-it/main/src/assets/imagenesGaleria/fondo17.jpg',
        clickeado: true,
      },
    ];
    this._publicaciones$.next(this._publicaciones);
  }

  ngOnInit(): void {}

  // Actualiza la info de la publicacion (des)likeada
  public likeado(publicacion: Publicacion): void {
    // Busco a la publicacion con el mismo id
    let encontrado = this._publicaciones.find((v1) => v1.id == publicacion.id);

    if (encontrado != undefined) {
      // En caso de que se encontrara la publicacion en la "db" (por el id), se actualizan los valores
      let posicion = this._publicaciones.indexOf(encontrado);
      this._publicaciones[posicion] = encontrado;
      this._publicaciones$.next(this._publicaciones);
      console.log(this._publicaciones);
    }
  }
}
