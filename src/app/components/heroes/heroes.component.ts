import { Component, OnInit } from '@angular/core';
import {HeroesService,heroe} from '../../services/heroes.services'; //Import service
import {Router} from '@angular/router'; // Function to redirect
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  //DECLARE VAR OF ARRAY
  heroes:heroe[] = [];
  constructor(private _getHeroeService:HeroesService,
              private goToURL:Router) {  } // Constructor of service

  ngOnInit() {
    // START services with the page is loaded
    this.heroes = this._getHeroeService.getHero(); // GET PUBLIC FUNCTION
    console.log(this.heroes);
  }
    public goToParent(index:number){
        this.goToURL.navigate(['/hero-info',index]); // Onclick = href
    }
}
