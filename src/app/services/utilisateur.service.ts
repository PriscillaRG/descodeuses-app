import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utilisateur } from '../models/utilisateur.model';

@Injectable({ providedIn: 'root' })

export class UtilisateurService {

    private apiUrl = 'http://localhost:8080/api/utilisateurs';
    
    constructor(private http: HttpClient) { }
    
    getUtilisateurs(): Observable<Utilisateur[]> {

        return this.http.get<Utilisateur[]>(this.apiUrl);
    }
}