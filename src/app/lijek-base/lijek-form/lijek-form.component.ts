import { Component, OnInit } from '@angular/core';
import { LijekService } from '../../services/lijek.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LijekCreate, LijekCreateNoSlika } from '../../models/lijek';
// import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-lijek-form',
  templateUrl: './lijek-form.component.html',
  styleUrl: './lijek-form.component.css'
})
export class LijekFormComponent implements OnInit {

  successMessage: boolean = false;
  errorMessages: any = [];
  isLoading: boolean = false;
  loadingTitle: string = 'Loading';
  file: File | null = null; // Variable to store file
  errorSifra!: string;


  lijek: LijekCreateNoSlika = {
    sifra: '',
    imeLijeka: '',
    opisLijeka: '',
//    slikaUpload: '',
    doziranje: 1
  };


  constructor(private lijekService: LijekService, private router: Router, 
              private route: ActivatedRoute) {}


  ngOnInit(): void {
    
  }

  back() {

    this.router.navigate(['/lijek']);
  }

  // On file Select
  onChange(event: any) {
    const file: File = event.target.files[0];

    if (file) {
//      this.status = "initial";
      console.log("file inicijaliziran.")
      this.file = file;
    }
  }

  handleSubmit() {

    this.isLoading = true;
    this.loadingTitle = 'Saving';
  

    let formData = new FormData();
    formData.append("imeLijeka", this.lijek.imeLijeka);
    formData.append("opisLijeka", this.lijek.opisLijeka);
    formData.append("sifra", this.lijek.sifra);
    formData.append("doziranje", this.lijek.doziranje.toString());
    if (this.file)
      formData.append("slikaUpload", this.file);


    this.lijekService.saveLijek(formData).subscribe({
      next: (res: any) => {

        console.log(res.id, 'response');
        this.successMessage = true;

        this.isLoading = false;

        this.router.navigate([`/lijek/${res.id}`]);
      },
      error: (err: any) => {

        console.log(err.error, 'errors');

        if (err.error.errors != null){

          this.errorMessages = err.error.errors;
        } else {

          this.errorSifra = err.error;
        }

        this.isLoading = false;
      }
    });

  }
}
