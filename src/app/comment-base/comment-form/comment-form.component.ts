import { Component, OnInit } from '@angular/core';
import { CommentService } from '../../services/comment.service';
import { Comment, CommentUpdate } from '../../models/comment';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrl: './comment-form.component.css'
})
export class CommentFormComponent implements OnInit {

  comment!: Comment;
  commentUpdate: CommentUpdate = {
    title: '',
    content: ''
  };
  commentId!: number;
  successMessage: boolean = false;

  constructor(private commentService: CommentService, private router: Router, 
    private route: ActivatedRoute) {
  
    }

    handleSubmit() {

      this.commentUpdate.title = this.comment.title;
      this.commentUpdate.content = this.comment.content;

// this.isLoading = true;

      this.commentService.updateComment(this.commentId, this.commentUpdate).subscribe({
        next: (res: any) => {

          console.log(res);

          if (res != null)
            this.successMessage = true;

          // this.isLoading = false;
        },
        error: (err: any) => {
            console.log(err.error.errors);
          // this.errors = err.error.errors
          // this.isLoading = false;
        }
      });
 
    }


    ngOnInit(): void {

      // add loading animation, or something?
      // this.isLoading = true;


      this.commentId = this.route.snapshot.params["id"];

      if (this.commentId != null) {

        this.commentService.getComment(this.commentId).subscribe((data: Comment) => {
          this.comment = data;
          // this.isLoading = false;
        });
      } // end if

    }

  back() : void {

    this.router.navigate(['/comment']);
 }

}
