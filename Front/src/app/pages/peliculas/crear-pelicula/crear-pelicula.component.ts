import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pelicula } from 'src/app/models/pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service ';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-crear-pelicula',
  templateUrl: './crear-pelicula.component.html',
  styleUrls: ['./crear-pelicula.component.css']
})
export class CrearPeliculaComponent {
  peliculaForm: FormGroup;
 
  constructor(private fb: FormBuilder,
              private router: Router,
              private _peliculaService: PeliculaService){
        this.peliculaForm = this.fb.group({
            titulo: ['', Validators.required],
            genero: ['', Validators.required],
            director: ['', Validators.required],
            actores: ['', Validators.required],
        })
  }



  agregarPelicula(){

    const pelicula: Pelicula = {
      titulo: this.peliculaForm.get('titulo')?.value,
      genero: this.peliculaForm.get('genero')?.value,
      director: this.peliculaForm.get('director')?.value,
      actores: this.peliculaForm.get('actores')?.value,
    }

    console.log(pelicula)

    Swal.fire({
      title: 'Creacion de Pelicula',
      text: "¿Desea crear la pelicula?",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this._peliculaService.crearPelicula(pelicula).subscribe(data =>{
          console.log(data);  
          this.router.navigate(['/listar-peliculas'])
        }) 
      }
    })

    
  }

}
