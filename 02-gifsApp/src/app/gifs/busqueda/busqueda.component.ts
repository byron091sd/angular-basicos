import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent  {

  //@viewChild  este decorador sirve para ver la información que contiente alguna elemento html o referencia local 
  @ViewChild("txtBuscar") txtBuscar!: ElementRef<HTMLInputElement>; // este operador ! sirve para indicar que el objeto nunca va a ser nulo

  constructor(private gifsService:GifsService){

  }

  buscar(){
    const valor = this.txtBuscar.nativeElement.value;
    
    if(valor.trim().length === 0){
      return ;
    }
    this.gifsService.guardarBusqueda(valor);

    this.txtBuscar.nativeElement.value ="";
  }
}
