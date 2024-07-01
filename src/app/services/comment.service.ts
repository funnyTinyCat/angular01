import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment, CommentCreate, CommentUpdate } from '../models/comment';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon';


const COMMENT_API = 'http://localhost:5078/api/comment';  //"http://localhost:5078/api/comment


@Injectable({
  providedIn: 'root'
})
export class CommentService {

constructor(private http: HttpClient) { }

  getComments() : Observable<Comment[]> {

    return this.http.get<Comment[]>(COMMENT_API);
  }
 
  getComment(id: number) {

    return this.http.get<Comment>(`${COMMENT_API}/${id}`);
  }

  updateComment(id: number, commentUpdate: CommentUpdate) {

    return this.http.put(`${COMMENT_API}/${id}`, commentUpdate);
  }

  saveComment(commentCreate: CommentCreate) {

    return this.http.post(`${COMMENT_API}/1`, commentCreate);
  }

  eraseComment(id: number) {

    return this.http.delete(`${COMMENT_API}/${id}`);
  }

}
