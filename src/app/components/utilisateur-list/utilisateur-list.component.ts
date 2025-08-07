import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../../services/utilisateur.service';
import { Utilisateur } from '../../models/utilisateur.model';

@Component({
  selector: 'app-utilisateur-list',
  standalone: false,
  templateUrl: './utilisateur-list.component.html',
  styleUrl: './utilisateur-list.component.css'
})
export class UtilisateurListComponent implements OnInit{
  utilisateurs: Utilisateur[] = [];

  constructor(private utilisateurService: UtilisateurService) { }
  ngOnInit(): void {
    this.utilisateurService.getUtilisateurs().subscribe((data) => {
      this.utilisateurs = data;
    });
  }
}

