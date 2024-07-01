import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: "full" },
    { path: 'pokemon', loadChildren: () => import('./pokemon-base/pokemon-base.module').then(m => m.PokemonBaseModule) },    
    { path: 'comment', loadChildren: () => import('./comment-base/comment-base.module').then(m => m.CommentBaseModule) },    
    { path: "**", component: NotfoundComponent // , pathMatch: "full"
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
