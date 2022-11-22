import { Component, EventEmitter } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent{

  // constructor(private dbzService: DbzService){//INYECCION DE DEPENDENCIAS

  // }

  constructor(){
    
  }
  // get personajes(): Personaje[]{
  //   return this.dbzService.personajes;
  
  nuevo : Personaje = {
    // nombre: "Trunks",
    // poder: 14000
    nombre: "Maestro Roshi",
    poder: 1000
  }

  // agregarNuevoPersonaje( argumento:Personaje){
  //   console.log(argumento)
  //   this.personajes.push(argumento);
  // }

  // agregar(event:any){
  //   if(this.nuevo.nombre.trim().length === 0){//trim borra espacios en blanco
  //     return;
  //   }

  //   // console.log(event);
  //   this.personajes.push(this.nuevo);
  //   this.nuevo={
  //     nombre:"",
  //     poder:0
  //   }
  //   console.log(this.nuevo);
  // }

  // cambiarNombre(event:any){
  //   console.log(event.target.value);
  // }

  
} 
