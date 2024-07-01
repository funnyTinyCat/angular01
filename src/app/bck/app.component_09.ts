import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

interface Pokemon {
  id: number,
  name: string,
  type: string,
  isCool: boolean,
  isStylish: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  pokemons : Pokemon[] = [{
    id: 1,
    name: 'Pikachu',
    type: 'electric',
    isCool: false,
    isStylish: true
  },
  {
    id: 2,
    name: 'Squirtle',
    type: 'water',
    isCool: true,
    isStylish: false
  }, 
  {
    id: 3,
    name: 'Charmander',
    type: 'fire',
    isCool: true,
    isStylish: true
  }];

 
}
