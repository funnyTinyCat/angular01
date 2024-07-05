import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lijek, LijekCreate, LijekCreateNoSlika, LijekUpdate } from '../models/lijek';


const LIJEK_API = 'http://localhost:5078/api/lijek';  //"http://localhost:5078/api/comment http://localhost:5078/api/lijek


@Injectable({
  providedIn: 'root'
})
export class LijekService {


  constructor(private http: HttpClient) { }

  getLijekovi() : Observable<Lijek[]> {

    return this.http.get<Lijek[]>(`${LIJEK_API}`);
  }

  getLijek(id: number) : Observable<Lijek> {

    return this.http.get<Lijek>(`${LIJEK_API}/${id}`);
  }

  saveLijek(formData: FormData) { 
  
    return this.http.post(`${LIJEK_API}`, formData);
  }

  eraseLijek(id: number) {

    return this.http.delete(`${LIJEK_API}/${id}`);
  }

  updateLijek(id: number, formData: FormData) {

    return this.http.put(`${LIJEK_API}/${id}`, formData);
  }


}
