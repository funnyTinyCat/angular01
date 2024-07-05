import { Component, OnInit } from '@angular/core';
import { Lijek } from '../../models/lijek';
import { LijekService } from '../../services/lijek.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-lijek-detail',
  templateUrl: './lijek-detail.component.html',
  styleUrl: './lijek-detail.component.css'
})
export class LijekDetailComponent implements OnInit {

  lijek!: Lijek;
  pathToImage: string = ''; 
  
  
  constructor(private lijekService: LijekService, private router: Router, 
    private route: ActivatedRoute) {}


  ngOnInit(): void {

    let id: any = this.route.snapshot.params['id'];
    
    this.lijekService.getLijek(id).subscribe((res: any) => {

      console.log(res);
      this.lijek = res;
      this.pathToImage = `http://localhost:5078/resources/${this.lijek.slikaNaziv}`;
    });
  }


  back() {

    this.router.navigate(['/lijek']);
  }

  
  deleteLijek(event: any, id: number) {

    if (confirm("Are you sure you want to delete this comment?")) {

      event.target.innerText = "Deleting...";

      this.lijekService.eraseLijek(id).subscribe( (res: any) =>
      {
        // get all comments again
        this.router.navigate(['/lijek']);
      });
    }
  } // end function
}
