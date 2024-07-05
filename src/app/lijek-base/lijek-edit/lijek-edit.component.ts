import { Component, OnInit } from '@angular/core';
import { Lijek, LijekImage, LijekImageNaziv, LijekUpdate } from '../../models/lijek';
import { LijekService } from '../../services/lijek.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lijek-edit',
  templateUrl: './lijek-edit.component.html',
  styleUrl: './lijek-edit.component.css'
})
export class LijekEditComponent implements OnInit {

  lijek!: Lijek;
  successMessage = false;
  errorMessages: any = [];
  isLoading: boolean = false;
  lijekId!: number;
  pathToImage!: string;
  fileName: string = "";
  lijekImage!: LijekImage;
  lijekUpdate!: LijekUpdate;
  errorSifra!: string;


  constructor(private lijekService: LijekService, private router: Router,
              private route: ActivatedRoute, private http: HttpClient) {  }

  ngOnInit(): void {
    this.lijekId = this.route.snapshot.params["id"];

    if (this.lijekId != null) {

      this.lijekService.getLijek(this.lijekId).subscribe((data: Lijek) => {
        this.lijek = data;
        // this.isLoading = false;
        this.pathToImage = `http://localhost:5078/resources/${this.lijek.slikaNaziv}`;
      });
    } // end if

  }

  back() : void {

    this.router.navigate(['/lijek']);
  }

  // update everything but image
  handleSubmit() {

    let formData = new FormData();
    formData.append("imeLijeka", this.lijek.imeLijeka);
    formData.append("opisLijeka", this.lijek.opisLijeka);
    formData.append("sifra", this.lijek.sifra);
    formData.append("doziranje", this.lijek.doziranje.toString());

// this.isLoading = true;
    let id = this.route.snapshot.params["id"];

    this.lijekService.updateLijek(id, formData).subscribe({
      next: (res: any) => {

        console.log(res);

        if (res != null)
          this.successMessage = true;

        // this.isLoading = false;
          this.router.navigate([`/lijek/${id}`]);
      },
      error: (err: any) => {
          console.log(err.error.errors);
        // this.errors = err.error.errors
        if (err.error.errors != null) {

          this.errorMessages = err.error.errors;
        } else {

          this.errorSifra = err.error;
        }
        // this.isLoading = false;
      }
    });

  }

  // update image
  onFileSelected(event: any)
  {
    console.log(event);

    const file:File = event.target.files[0];

    if (file) {

        this.fileName = file.name;

        const formData = new FormData();

        formData.append("slikaUpload", file);
        formData.append("naziv", this.fileName);

        let id = this.route.snapshot.params["id"];

        if (id != null) {

        
          const upload$ = this.http.put(`http://localhost:5078/api/lijek/image/${id}`, formData);

          upload$.subscribe({
            next: (res: any) => {

              console.log(res);
    
              if (res != null) {

                this.pathToImage = `http://localhost:5078/resources/${res.Naziv}`;
              }
//                this.successMessage = true;    
              // this.isLoading = false;

            },
            error: (err: any) => {
                console.log(err.error.errors);
              // this.errors = err.error.errors
  
              // this.isLoading = false;
            }
          });

        }
    }

  }
}
