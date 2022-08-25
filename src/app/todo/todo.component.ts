import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/Todo';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {
  // todoList contains all todos
  todoList: Todo[];
  constructor() { }

  ngOnInit() {
  }
  // write logic to the onAddTodo method is to add a new todo to list
  // get maximum id in list and assign maximum id plus one while adding a todo
  onAddTodo(todoText: any) {
  }

  // write logic to the onClearTodos method to delete the all todos in the todoList
  onClearTodos() {
  }

  // write logic to method onCompletingTask, to mark todo as as completed or not
  onCompletingTodo(todo: Todo) {
  }

  // write logic to method onDeletingTask, to delete the todo
  onDeletingTodo(todoId) {
  }
}
