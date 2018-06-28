import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/*
APP_ROUTES
*/
import { APP_ROUTING } from './app.routes'; // rutas
/*
Services
*/
import {HeroesService} from './services/heroes.services';

/*Components */
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SharedComponent } from './components/shared/shared.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroInfoComponent } from './components/hero-info/hero-info.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    SharedComponent,
    HeroesComponent,
    HeroInfoComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
