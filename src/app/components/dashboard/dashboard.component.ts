import { Component, OnInit } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import { Todo } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-encart',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent implements OnInit {
  todos: Todo[] = [];


  constructor(private todoService : TodoService) {

  }


 ngOnInit(): void {
    this.fetchTodo();
  }

 
   //KPI
  fetchTodo() {
    
 //communication asynchrone donc il faut s'inscrire ^pur avoir le retour
    this.todoService.getTodos().subscribe((data: any)=> {
      this.todos = data;

       //creer 3 variables de type nombre
      let today = new Date();

      //Urgentes: priority = 1 Et due date = Aujourd'hui
      let countUrgent = 0, countToday = 0, countLate = 0;
      countUrgent = this.todos.filter(c=>
        c.priority == '1' &&
        new Date(c.dueDate).toDateString() == today.toDateString()).length;

      this.kpis[2].value = countUrgent;

    //A faire aujourd'hui: due date = Aujourd'hui
    // Tache en retard: due date > Aujourd hui

    //this.todos.filter

    });

    //cree 3 variables de type nombre

    //Urgence: priority = 1 Et due date = Aujourd'hui
    // this.todos.filter(c=> c.priority && c.dueDate). TAILLE_LISTE;
    
  }
  //KPI
  //KeyPerformanceIndicator
  kpis = [
    {
      id:1,
      title: 'A faire aujourdh\'ui',
      color: '!bg-blue-500',
      value: 3,
      icon: 'event'
    },
    {
      id:2,
      title: 'Taches en retard',
      color: '!bg-red-500',
      value: 5,
      icon: 'warning'
    },
    {
      id:3,
      title: 'Urgentes',
      color: '!bg-yellow-500',
      value: 2,
      icon: 'priority_high'
    }
  ];
}

  

