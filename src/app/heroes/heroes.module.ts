import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";

@NgModule({
    declarations:[  //cosas que contiene este modulo
        HeroeComponent,
        ListadoComponent
    ],
    exports:[//cosas visibles o públicas de esta clase para otras clases
        ListadoComponent
    ],
    imports:[
        // CommonModule
    ]
})

export class HeroesModule{

}