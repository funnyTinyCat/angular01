import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PokemonBaseModule } from './pokemon-base/pokemon-base.module';
// import { PokemonService } from './services/pokemon.service';
import { PokemonTemplateFormComponent } from './pokemon-base/pokemon-template-form/pokemon-template-form.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { CommentBaseModule } from './comment-base/comment-base.module';
import { LoaderComponent } from './partials/loader/loader.component';
import { LijekBaseModule } from './lijek-base/lijek-base.module';


@NgModule({
  declarations: [			
    AppComponent,
      NotfoundComponent,
      HomeComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PokemonBaseModule,
    CommentBaseModule,
    LijekBaseModule
  ],
  providers: [
    //PokemonService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
