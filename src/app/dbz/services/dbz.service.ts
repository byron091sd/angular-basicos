import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()//los servicios usan el decorador injectable
export class DbzService{//el ssrvicio solo se crea cuando alguien lo requiera componente, pipe, servicio, etc
   

  private _personajes: Personaje[]=[
    {nombre:"Goku", poder:15000},
    {nombre:"Vegeta", poder:7500}
  ];

  get personajes(): Personaje[]{
    return [...this._personajes];//los 3 puntos son el operador spread, permite separar en items la cadena o el arreglo
}

constructor(){

}

agregarPersonaje(personaje: Personaje){
    return this._personajes.push(personaje);
}

}