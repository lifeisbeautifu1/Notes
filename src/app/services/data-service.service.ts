import { Injectable } from '@angular/core';

import { Todo } from '../types';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  todos: Todo[] = [
    {
      text: 'Test',
      completed: true,
    },
    {
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam vero quas nostrum?',
      completed: false,
    },
  ];
  constructor() {}

  getAllTodos() {
    return this.todos;
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  updateTodo(index: number, updatedTodo: Todo) {
    this.todos[index] = updatedTodo;
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
