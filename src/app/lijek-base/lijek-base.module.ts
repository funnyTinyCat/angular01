import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LijekListComponent } from './lijek-list/lijek-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LijekService } from '../services/lijek.service';
import { LijekDetailComponent } from './lijek-detail/lijek-detail.component';
import { LijekFormComponent } from './lijek-form/lijek-form.component';
import { LoaderComponent } from '../partials/loader/loader.component';
import { LijekEditComponent } from './lijek-edit/lijek-edit.component';


const routes: Routes = [

  {
    path: "",
    children: [
      { path: '', component: LijekListComponent },
      { path: ':id', component: LijekDetailComponent },
      { path: 'edit/:id', component: LijekEditComponent },
      { path: 'create/new', component: LijekFormComponent },
       
    ]
  }
]

@NgModule({
  declarations: [
    LijekListComponent,
    LijekDetailComponent,
    LijekFormComponent,
    LijekEditComponent,
  //  LoaderComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ], 
  exports: [
    LijekListComponent,
    LijekDetailComponent,
    LijekFormComponent,
    LijekEditComponent
  ],
  providers: [
    LijekService
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class LijekBaseModule { }
