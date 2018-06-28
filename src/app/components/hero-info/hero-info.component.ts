import { Component, OnInit } from '@angular/core';
import {HeroesService} from '../../services/heroes.services';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-hero-info',
  templateUrl: './hero-info.component.html'
})
export class HeroInfoComponent {

  heroe:any = {};

  constructor(private getRouter:ActivatedRoute,private getParam:HeroesService) {
      this.getRouter.params.subscribe(params=>{
           this.heroe = this.getParam.getHeroById(params['id']);
           console.log(this.heroe);
      });
  }
}
