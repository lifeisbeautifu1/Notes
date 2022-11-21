import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Todo } from 'src/app/types';

@Component({
  selector: 'app-edit-todo-dialog',
  templateUrl: './edit-todo-dialog.component.html',
  styleUrls: ['./edit-todo-dialog.component.scss'],
})
export class EditTodoDialogComponent implements OnInit {
  showValidationErrors: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<EditTodoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public todo: Todo
  ) {}

  ngOnInit(): void {}

  close() {
    this.dialogRef.close();
  }

  onSubmit(form: NgForm) {
    // this.todo.text = form.value.text;
    if (form.invalid) {
      this.showValidationErrors = true;
      return;
    }

    const updatedTodo = {
      ...this.todo,
      ...form.value,
    };

    this.dialogRef.close(updatedTodo);
    this.showValidationErrors = false;
  }
}
