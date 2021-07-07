import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  username = '';
  todos = [
    new Todo(1, 'Learn Full Stack Development', false, new Date()),
    new Todo(2, 'Enhance HTML 5 & CSS 3 Skills', false, new Date()),
    new Todo(3, 'Learn Git', false, new Date()),
    new Todo(4, 'Learn Docker', false, new Date()),
    new Todo(5, 'Learn Spring Security', false, new Date()),
  ]

constructor() { }

ngOnInit(): void {
  this.username = sessionStorage.getItem('username');
}

}
