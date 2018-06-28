/*
Routes
*/
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component'
import { HomeComponent } from './components/home/home.component'
import { HeroesComponent } from './components/heroes/heroes.component'
import {HeroInfoComponent} from './components/hero-info/hero-info.component';
import {SearchComponent} from './components/search/search.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'hero-info/:id', component: HeroInfoComponent },//:PARAMETROS
  { path: 'search/:name', component: SearchComponent }, //Busca segun su nombre
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
// SI QUEREMOS TRABAJAR CON PARAMETROS
//APP_ROUTES, {useHash:true}
