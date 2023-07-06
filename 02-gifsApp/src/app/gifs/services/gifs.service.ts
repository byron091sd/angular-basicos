import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'//eleva el servicio de manera globlal y así no tenemos que especificar en el provider de cada module
})
export class GifsService {

  private apiKei : String = '80cAGKAUET6O9ecA9s49d7gRbxoJIgLE';

  //hacemos el getter para poder cambiar en tiempo real la data
  private _historial: string[] = []
  //TODO: CAMBIAR EL TIPADO
  public resultados: Gif [] =[]

  get historial(){
    return [...this._historial] //rompemos la relacion o referencia usando el spread para que no pueda modificar el arreglo original y asi retornar un nuevo arreglo
  }

  constructor(private http :HttpClient){
    //se realiza el get del local storage dentro del constructor del servicio porque es lo que se ejecuta una sola vez en la primera llamada
    // if(localStorage.getItem('historial')){
    //   this._historial = JSON.parse(localStorage.getItem('historial')!);
    // }
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    if(this._historial.length === 0) return;
    this.guardarBusqueda(this._historial[0]);

  }

  async guardarBusqueda(query:string){

    query = query.trim().toLocaleLowerCase();

    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10); //splice permite cortar el arreglo

      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=80cAGKAUET6O9ecA9s49d7gRbxoJIgLE&q=${query}&limit=10`)//observable mejor que una promesa ?
      .subscribe((resp) => {
        console.log(resp.data);
        this.resultados = resp.data;
      })


    // fetch('https://api.giphy.com/v1/gifs/search?api_key=80cAGKAUET6O9ecA9s49d7gRbxoJIgLE&q=dragon ball z&limit=10')
    // .then(resp => {
    //   resp.json()
    //     .then(data => {
    //       console.log(data)
    //     })
    // })

    // const resp = await fetch('https://api.giphy.com/v1/gifs/search?api_key=80cAGKAUET6O9ecA9s49d7gRbxoJIgLE&q=dragon ball z&limit=10');
    // const data = await resp.json();
    // console.log(data);
  }
}
