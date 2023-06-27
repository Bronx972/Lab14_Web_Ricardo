import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Copia } from 'src/app/models/copia';
import { CopiaService } from 'src/app/services/copia.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-copias',
  templateUrl: './listar-copias.component.html',
  styleUrls: ['./listar-copias.component.css']
})
export class ListarCopiasComponent implements OnInit{

  listCintas: Copia[] = [];
  elementos: number = 0;


  constructor(private _copiaService: CopiaService,
    private router: Router) {

}

ngOnInit(): void {
  this.obtenerCintas();
}

obtenerCintas(){
  this._copiaService.obtenerCopias().subscribe(data => {
    console.log(data);
    this.listCintas = data;
    this.elementos = this.listCintas.length;
  })
}

eliminarCinta(id: any){
  this._copiaService.eliminarCopia(id).subscribe(data => {

    Swal.fire({
      title: 'Eliminacion de Cinta',
      text: "¿Desea eliminar la cinta?",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(data);
        this.obtenerCintas();
        this.elementos = this.listCintas.length;
        this.router.navigate(['/listar-cintas'])

      }
    })
  })
  

}

}
