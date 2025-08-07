import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';
import { Utilisateur } from '../models/utilisateur.model';

@Injectable({
  providedIn: 'root'
})

// API virtuelle mock 
// 'InMemory' cad donnees initialise avec chaque demarrage

//prerequis en terminal:
//npm i angular-in-memory-web-api@0.19.0
//ng g service in-memory-data
export class InMemoryDataService implements InMemoryDataService {

  constructor() { }
  

  createDb() {
    const todos : Todo[] = [
      //Urgentes: priority = 1 Et due date Aujourd'hui
      {id:1, title:'Appeler Secu', completed: false, priority:'1', dueDate:new Date().toISOString(), description:null},

      //A faire aujourd'hui: due date Aujourd'hui
      {id:2, title:'Envoyer email', completed: false, priority:null, dueDate:new Date().toISOString(), description: null},

      //Tache en retard: due date Aujourd'hu
      {id:3, title:'Declaration impot', completed: false, priority:null, dueDate:new Date(2025,5,1).toISOString(), description:null},

      //Tache en retard
      {id:4, title:'Envoyer CV', completed: false, priority:null, dueDate:new Date(2025,5,2).toISOString(), description: null},
    ];

    const utilisateurs : Utilisateur[] = [
      {id:1, prenom:'Marie', nom:'Curie', sexe:'Femme'},
      {id:2, prenom:'Marie 2', nom:'Curie 2', sexe:'Femme'}
    ];

    return { todos, utilisateurs }; // un lien endpoint api/todos 
  }
}
