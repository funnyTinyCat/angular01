import { Component, OnInit } from '@angular/core';
import { CommentService } from '../../services/comment.service';
import { Comment } from '../../models/comment';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-comment-detail',
  templateUrl: './comment-detail.component.html',
  styleUrl: './comment-detail.component.css'
})
export class CommentDetailComponent implements OnInit {
  comment!: Comment;

  constructor(private commentService: CommentService, private router: Router, 
    private route: ActivatedRoute) {}

  back(): void {

    this.router.navigate(['/comment']);
  }

  ngOnInit(): void {

    let id: any = this.route.snapshot.params['id'];

    this.commentService.getComment(id).subscribe((data: Comment) => {
      this.comment = data;
    });

  }

  deleteComment(event: any, id: number) {

    if (confirm("Are you sure you want to delete this comment?")) {

      event.target.innerText = "Deleting...";

      this.commentService.eraseComment(id).subscribe( (res: any) =>
      {
        // get all comments again
        this.router.navigate(['/comment']);
      });
    }
  } // end function
  
}
