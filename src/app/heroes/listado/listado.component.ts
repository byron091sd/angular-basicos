import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  heroes: string[] = ["Spiderman", "Ironman", "Hulk", "Thor", "Capitán América"];
  borrado:string='';

  borrarHeroe():void{
    this.borrado = this.heroes.shift() || '';
    // console.log(this.borrado);
  }


}
