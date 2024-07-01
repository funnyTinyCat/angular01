import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommentCreate } from '../../models/comment';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-comment-form-create',
  templateUrl: './comment-form-create.component.html',
  styleUrl: './comment-form-create.component.css'
})
export class CommentFormCreateComponent implements OnInit {

  comment: CommentCreate = {

    title: '',
    content: '',
    createdOn: ''
  };

  successMessage: boolean = false;
  errorMessage: any = [];
  isLoading: boolean = false;
  loadingTitle: string = 'Loading';

  constructor(private router: Router, private commentService: CommentService) {


  }


  ngOnInit(): void {
    
  }

  back(): void {

    this.router.navigate(['/comment']);
  }

  handleSubmit () {

    this.isLoading = true;
    this.loadingTitle = 'Saving';

    this.commentService.saveComment(this.comment).subscribe({

      next: (res: any) => {

        console.log(res, 'response');
        this.successMessage = true;

   //     this.router.navigate(['/comment']);
        this.comment.title = '';
        this.comment.content = '';
        this.comment.createdOn = '';

        this.isLoading = false;
      },
      error: (err: any) => {

        console.log(err, "errors");
        console.log(err.status);
        console.log(err.error.errors.Content[0]);
        console.log(err.error.errors.Content[1]);
        console.log(err.error.errors.Title[0]);
        console.log(err.error.errors.Title[1]);

        this.errorMessage = err.error.errors;

        this.isLoading = false;

      }
    });
  }

}
