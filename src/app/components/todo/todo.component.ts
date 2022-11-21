import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Todo } from 'src/app/types';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  @Input() todo!: Todo;

  @Output() todoClicked: EventEmitter<Todo> = new EventEmitter();

  @Output() editClicked: EventEmitter<Todo> = new EventEmitter();

  @Output() deleteClicked: EventEmitter<Todo> = new EventEmitter();

  // @ViewChild('editBtn') editBtnElRef!: ElementRef<HTMLElement>;

  constructor() {}

  ngOnInit(): void {}

  toggleComplete() {
    this.todoClicked.emit(this.todo);
  }

  onEditClicked() {
    this.editClicked.emit(this.todo);
  }

  onDeleteClicked() {
    this.deleteClicked.emit(this.todo);
  }
}
