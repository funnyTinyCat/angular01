import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  pokemonName : string = "";

  handleChange(event: any) {

    this.pokemonName = event.target.value;
  }
}
