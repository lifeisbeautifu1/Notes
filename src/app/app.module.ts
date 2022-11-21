import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoComponent } from './components/todo/todo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditTodoDialogComponent } from './components/edit-todo-dialog/edit-todo-dialog.component';
import { TooltipDirective } from './directives/tooltip.directive';
import { TooltipSingletonDirective } from './directives/tooltip-singleton.directive';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoComponent,
    EditTodoDialogComponent,
    TooltipDirective,
    TooltipSingletonDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
