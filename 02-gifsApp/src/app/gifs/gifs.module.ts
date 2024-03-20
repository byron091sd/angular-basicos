import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { ResultadoComponent } from './components/resultado/resultado.component';
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [
    GifsPageComponent,
    BusquedaComponent,
    ResultadoComponent,
    CardComponent
  ],
  exports:[
    GifsPageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class GifsModule { }
