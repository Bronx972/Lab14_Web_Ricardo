import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateUserComponent } from './pages/users/create-user/create-user.component';
import { LoginComponent } from './pages/users/login/login.component';

import { ListarPeliculasComponent } from './pages/peliculas/listar-peliculas/listar-peliculas.component';
import { CrearPeliculaComponent } from './pages/peliculas/crear-pelicula/crear-pelicula.component';
import { EditarPeliculasComponent } from './pages/peliculas/editar-peliculas/editar-peliculas.component';
import { ListarCopiasComponent } from './pages/copias/listar-copias/listar-copias.component';
import { CrearCopiaComponent } from './pages/copias/crear-copia/crear-copia.component';
import { ListarSociosComponent } from './pages/socios/listar-socios/listar-socios.component';
import { EditarSocioComponent } from './pages/socios/editar-socio/editar-socio.component';

const routesInicio: Routes = [
  { path: '', component: LoginComponent },
  { path: 'crear-usuario', component: CreateUserComponent },

  { path: 'listar-peliculas', component: ListarPeliculasComponent },
  { path: 'crear-pelicula', component: CrearPeliculaComponent },
  { path: 'editar-pelicula/:id', component: EditarPeliculasComponent },

  { path: 'listar-cintas', component: ListarCopiasComponent },
  { path: 'crear-cinta', component: CrearCopiaComponent },


  { path: 'listar-socios', component: ListarSociosComponent },
  { path: 'editar-socio/:id', component: EditarSocioComponent },

  { path: '**', redirectTo: '', pathMatch: 'full'}
];



@NgModule({
  imports: [RouterModule.forRoot(routesInicio)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
