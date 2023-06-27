export class Prestamo {

    _id?: string;
    socio: string;
    copia: string;
    fechaDevolucion: Date;
  

    constructor(socio:string, copia:string, fechaDevolucion: Date){
        this.socio = socio;
        this.copia = copia;
        this.fechaDevolucion = fechaDevolucion;
    }

}