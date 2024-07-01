import { Component, OnInit } from '@angular/core';
import { Comment } from '../../models/comment';
import { CommentService } from '../../services/comment.service';
import { Pokemon } from '../../models/pokemon';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrl: './comment-list.component.css'
})
export class CommentListComponent implements OnInit {

  comments!: Comment[];
  pokemons!: Pokemon[];

  test: string = "test juuhuuu..";
  
  constructor(private commentService: CommentService) {
    
  }

  goToDetail(event: any): void {

  
      var target = event.target || event.srcElement || event.currentTarget;
      var idAttr = target.attributes.id;
      var value = idAttr.nodeValue;
    
  }


  ngOnInit(): void {
  
      this.commentService.getComments().subscribe((data: Comment[]) => 
      {
        console.log(data);
        this.comments = data;
      }
    );
      
  }

  deleteComment(event: any, id: number) {

    if (confirm("Are you sure you want to delete this comment?")) {

      event.target.innerText = "Deleting...";

      this.commentService.eraseComment(id).subscribe( (res: any) =>
      {
        // get all comments again
        this.commentService.getComments().subscribe((data: Comment[]) => 
          {
            console.log(data);
            this.comments = data;
          }
        );

      });
    }
  }
  

}
