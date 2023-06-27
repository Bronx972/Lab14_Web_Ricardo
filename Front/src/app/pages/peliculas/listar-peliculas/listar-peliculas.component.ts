import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';
import { Router } from '@angular/router';
import { PeliculaService } from 'src/app/services/pelicula.service ';
import Swal from 'sweetalert2';
import { Copia } from 'src/app/models/copia';

@Component({
  selector: 'app-listar-peliculas',
  templateUrl: './listar-peliculas.component.html',
  styleUrls: ['./listar-peliculas.component.css']
})
export class ListarPeliculasComponent implements OnInit {
  
  listPeliculas: Pelicula[] = [];
  elementos: number = 0;
  
  constructor(private _peliculaService: PeliculaService,
            private router: Router) {

  }
  
  
  
  
  ngOnInit(): void {
    this.obtenerPeliculas();
  }



  obtenerPeliculas(){
    this._peliculaService.obtenerPeliculas().subscribe(data => {
      console.log(data);
      this.listPeliculas = data;
      this.elementos = this.listPeliculas.length;
    })
  }
  obtenerIdsCinta(copias: any[]): string[] {
    return copias.map(copia => copia.id_cinta);
  }
  
  // obtenerIdsCinta(copias: Copia[]): [] {
  //   if (copias && copias.length > 0) {
  //     return copias.map(copia => copia.id_cinta).join(', ');
  //   } else {
  //     return "No hsy copias";
  //   }
  // }
  
  
  

  eliminarPelicula(id: any){
    this._peliculaService.eliminarPelicula(id).subscribe(data => {

      Swal.fire({
        title: 'Eliminacion de Producto',
        text: "¿Desea eliminar el producto?",
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          console.log(data);
          this.obtenerPeliculas();
          this.elementos = this.listPeliculas.length;
          this.router.navigate(['/listar-peliculas'])

        }
      })
    })
    

  }
}
