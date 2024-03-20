import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent   {

  get historial(): string[]{
    return this.gifsService.historial;
  }
  
  buscarItemGif(item: string){
    this.gifsService.guardarBusqueda(item);
  }

  constructor(private gifsService:GifsService){

  }

}
