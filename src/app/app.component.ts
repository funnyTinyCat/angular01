import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

interface Nav {
  link: string,
  name: string,
  exact: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

 nav: Nav[] = [
  {
    link: "/",
    name: "Home",
    exact: true
  },
  {
    link: "comment",
    name: "Comments",
    exact: false
  },
  {
    link: "pokemon",
    name: "Pokemons",
    exact: true
  },
  {
    link: "lijek",
    name: "Lijekovi",
    exact: true
  }

  /*
  {
    link: "badroute",
    name: "Bad-Route",
    exact: true
  }
    */
 ];
}
