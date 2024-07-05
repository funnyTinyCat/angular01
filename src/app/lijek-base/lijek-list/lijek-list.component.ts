import { Component, OnInit } from '@angular/core';
import { Lijek } from '../../models/lijek';
import { LijekService } from '../../services/lijek.service';

@Component({
  selector: 'app-lijek-list',
  templateUrl: './lijek-list.component.html',
  styleUrl: './lijek-list.component.css'
})
export class LijekListComponent implements OnInit {

  lijekovi!: Lijek[];

  constructor(private lijekService: LijekService) { }

  ngOnInit(): void {
    
    this.lijekService.getLijekovi().subscribe((data: Lijek[]) => {

      console.log(data);
      this.lijekovi = data;
    });
  }

  deleteLijek(event: any, id: number) {

  
    if (confirm("Are you sure you want to delete this comment?")) {

      event.target.innerText = "Deleting...";

      this.lijekService.eraseLijek(id).subscribe( (res: any) =>
      {
        // get all comments again
        this.lijekService.getLijekovi().subscribe((data: Lijek[]) => 
          {
            console.log(data);
            this.lijekovi = data;
          }
        );

      });
    }
      
  }  

}
