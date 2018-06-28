import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'

})
export class NavbarComponent implements OnInit {

  constructor(private goToSearch:Router) { }

  ngOnInit() {
  }
    searchHero(find:string)
    {
        this.goToSearch.navigate(['/search',find]);
    }
}
