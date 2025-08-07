import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';

//commande pour créer le fichier 
// ng g service todo
// Le service c'est le lien entre le front et le back 
//il fait les operations CRUD (Create, Read, Update, Delete) (Plus value en entretien) 
// il communique avec le back via HttpClient
// il est decoré par le decorateur Injectable
// 'providedIn: root' signifie que le service est disponible dans toute l'application
// il est injecté dans le constructeur du composant qui en a besoin

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private apiUrl = 'http://localhost:8080/api/action';

// HttpClient Pour communiquer avec le API/BackEnd
  constructor(private http: HttpClient) { }

  //CRUD 
  //Create 
  //Todo c'est le type de retour de l'appel HTTP
addTodo (item : Todo) {
  return this.http.post<Todo>(this.apiUrl, item )

}
//Read  
//Fetch liste 
getTodos() {
//HTTP GET sans éeme parametre parce qu'il n'y a pas de body 
  return this.http.get<Todo[]>(this.apiUrl);

}
//Fetch un item de Todo
getTodo (id : number) {
  return this.http.get<Todo>(this.apiUrl +'/'+ id);

}

UpdateTodo (item: Todo) {
  return this.http.put<Todo>(this.apiUrl + '/' + item.id, item);

}

deleteTodo (id : number) {
return this.http.delete<Todo>(this.apiUrl + '/' + id);

}

}

