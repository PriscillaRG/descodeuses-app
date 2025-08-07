import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-utilisateur',
  standalone: false,
  templateUrl: './utilisateur.component.html',
  styleUrl: './utilisateur.component.css'
})
export class UtilisateurComponent implements OnInit {
  
  listGenre = [
    ({ value: 'Homme', viewValue: 'H' }),
    ({ value: 'Femme', viewValue: 'F' }),
    ({ value: 'Autre', viewValue: 'Autre' })
  ]
  utilisateurForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.utilisateurForm = this.formBuilder.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      genre: [ '', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      motdepasse: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.utilisateurForm.valid) {
      console.log(this.utilisateurForm.value);
 
    }
  }

}
