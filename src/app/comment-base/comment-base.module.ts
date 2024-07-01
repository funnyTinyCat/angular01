import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentListComponent } from './comment-list/comment-list.component';
import { RouterModule, Routes } from '@angular/router';
import { CommentService } from '../services/comment.service';
import { HttpClientModule } from '@angular/common/http';
import { CommentDetailComponent } from './comment-detail/comment-detail.component';
import { FormsModule } from '@angular/forms';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { CommentFormCreateComponent } from './comment-form-create/comment-form-create.component';
import { LoaderComponent } from '../partials/loader/loader.component';


const routes: Routes = [

  {
    path: "",
    children: [
      { path: '', component: CommentListComponent },
      { path: ':id', component: CommentDetailComponent },
      { path: 'edit/:id', component: CommentFormComponent },
      { path: 'create/new', component: CommentFormCreateComponent },
    ]
  }
]

@NgModule({
  declarations: [
    CommentListComponent,
    CommentDetailComponent,
    CommentFormComponent,
    CommentFormCreateComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(routes)
  ], 
  exports: [
    CommentListComponent,
    CommentDetailComponent,
    CommentFormComponent,
    CommentFormCreateComponent
  ],
  providers: [
    CommentService
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class CommentBaseModule { }
