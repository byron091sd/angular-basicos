import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})

export class PersonajesComponent  {

  // @Input("personajesHijo") personajes:Personaje[]=[]; //input le dice que estos Personajes vienen de un componente padre

  get personajes(): Personaje[]{
    return this.dbzService.personajes;
  }

  constructor(private dbzService: DbzService){//ya se inicializo en el main page por lo tanto no crea otra instancia
  }
}
