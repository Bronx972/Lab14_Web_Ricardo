import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/users/login/login.component';
import { CreateUserComponent } from './pages/users/create-user/create-user.component';
import { NavbarComponent } from './pages/navbar/navbar.component';

import { GoogleMapsModule } from '@angular/google-maps';

import { CrearPeliculaComponent } from './pages/peliculas/crear-pelicula/crear-pelicula.component';
import { ListarPeliculasComponent } from './pages/peliculas/listar-peliculas/listar-peliculas.component';
import { EditarPeliculasComponent } from './pages/peliculas/editar-peliculas/editar-peliculas.component';
import { CrearCopiaComponent } from './pages/copias/crear-copia/crear-copia.component';
import { ListarCopiasComponent } from './pages/copias/listar-copias/listar-copias.component';
import { ListarSociosComponent } from './pages/socios/listar-socios/listar-socios.component';
import { EditarSocioComponent } from './pages/socios/editar-socio/editar-socio.component';
import { ListarPrestamosComponent } from './pages/prestamos/listar-prestamos/listar-prestamos.component';
import { CrearPrestamoComponent } from './pages/prestamos/crear-prestamo/crear-prestamo.component';
import { EditarPrestamoComponent } from './pages/prestamos/editar-prestamo/editar-prestamo.component';


@NgModule({
  declarations: [
    
    AppComponent,
    LoginComponent,
    CreateUserComponent,
    NavbarComponent,
    CrearPeliculaComponent,
    ListarPeliculasComponent,
    EditarPeliculasComponent,
    CrearCopiaComponent,
    ListarCopiasComponent,
    ListarSociosComponent,
    EditarSocioComponent,
    ListarPrestamosComponent,
    CrearPrestamoComponent,
    EditarPrestamoComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
