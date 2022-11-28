import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { PublicacionComponent } from './publicacion/publicacion.component';
import { LikedPostsComponent } from './liked-posts/liked-posts.component';
import { BotonLikeComponent } from './boton-like/boton-like.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    GaleriaComponent,
    PublicacionComponent,
    LikedPostsComponent,
    BotonLikeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
