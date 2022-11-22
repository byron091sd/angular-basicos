import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {

   @Input() nuevo : Personaje = {
    // nombre: "Trunks",
    // poder: 14000
    nombre: "",
    poder: 0
  }
  
  constructor(private dbzService: DbzService){//ya se inicializo en el main page por lo tanto no crea otra instancia
  }

  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();//Permite emitir data al componente padre
  
  agregar(){
    if(this.nuevo.nombre.trim().length === 0){//trim borra espacios en blanco
      return;
    }
    console.log(this.nuevo);
    
    this.dbzService.agregarPersonaje(this.nuevo);
    // this.onNuevoPersonaje.emit(this.nuevo);
    // console.log(event);
    this.nuevo={
      nombre:"",
      poder:0
    }
  }

}
