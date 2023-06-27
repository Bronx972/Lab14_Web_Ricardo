import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Copia } from 'src/app/models/copia';
import { Pelicula } from 'src/app/models/pelicula';
import { CopiaService } from 'src/app/services/copia.service';
import { PeliculaService } from 'src/app/services/pelicula.service ';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-crear-copia',
  templateUrl: './crear-copia.component.html',
  styleUrls: ['./crear-copia.component.css']
})
export class CrearCopiaComponent implements OnInit {
  
  id: string = '';
  cintaForm: FormGroup;

  listPeliculas: Pelicula[] = [];

  constructor(
      private _peliculaService: PeliculaService,
      private router: Router,
      private _copiaService: CopiaService,
      private fb: FormBuilder) {
      this.cintaForm = this.fb.group({
        pelicula: ['', Validators.required],
        id_cinta: ['', Validators.required],
      })
}
  
  
  
  ngOnInit(): void {
    this.obtenerPeliculas();
  }
  

  obtenerPeliculas(){
    this._peliculaService.obtenerPeliculas().subscribe(data => {
      console.log(data);
      this.listPeliculas = data;
    })
  }


agregarCinta(){

const cinta: Copia = {
  pelicula: this.id,
  id_cinta: this.cintaForm.get('id_cinta')?.value,
}
console.log(cinta)

Swal.fire({
title: 'Creacion de Cinta',
text: "¿Desea crear la cinta?",
icon: 'info',
showCancelButton: true,
confirmButtonColor: '#3085d6',
cancelButtonColor: '#d33',
confirmButtonText: 'Aceptar',
cancelButtonText: 'Cancelar'
}).then((result) => {
if (result.isConfirmed) {
this._copiaService.crearCopia(cinta).subscribe(data =>{
console.log(data);  
this.router.navigate(['/listar-cintas'])
}) 
}
})


}







}
