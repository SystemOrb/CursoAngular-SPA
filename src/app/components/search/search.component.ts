import { Component, OnInit } from '@angular/core';
//importamos para traer la función que me hace el bucle
import {HeroesService,heroe} from '../../services/heroes.services';
import {ActivatedRoute} from '@angular/router'; // PARA EL GET
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  //heroe:heroe[] = []; // Por si consigue el array
  public heroeData = {}; //Declaramos un array vacio para
  //anexarle parametros
  constructor(private getRouter:ActivatedRoute,
              private filter:HeroesService) {
                /*Invocamos la ruta para el parametro y el servicio
                de heroe
                */
                this.getRouter.params.subscribe(params=>{
                     let validator = this.filter.heroByFilter(params['name']);
/*
Invocamos una función del servicio que devuelve al heroe si lo consigue
según su nombre
*/
                     if(!Array.isArray(validator))
                     {
                       //Verificamos si es un array, es decir que no devuelva
                       //undefined o 0
                       console.log("0");
                     }else{
                       //Consiguio al menos un valor, pero eliminamos
                       //el resto de valores vacios para dejar un unico valor
                       for(let x of validator) // Recorremos ese bucle
                       {
                         if(x!=undefined)
                         { // Si hay un valor al menos entonces lo almacena
                           this.heroeData = x;
                         }
                       }
                     }
                });

  }

  ngOnInit() {

  }

}
