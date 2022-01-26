import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.models';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo
  @ViewChild('txtInputRef') txtInputRef: ElementRef
  chkCompleted: FormControl
  txtInput: FormControl
  editing = false
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.chkCompleted = new FormControl(this.todo.completed)
    this.txtInput = new FormControl(this.todo.texto, Validators.required)
    this.chkCompleted.valueChanges.subscribe(value => {
      this.store.dispatch(actions.toggle({ id: this.todo.id }))
    })
  }
  edit() {
    this.editing = true
    this.txtInput.setValue(this.todo.texto)
    setTimeout(() => {
      this.txtInputRef.nativeElement.select()
    }, 1)
  }
  terminarEdicion() {
    this.editing = false
    if (this.txtInput.invalid) return
    if (this.txtInput.value === this.todo.texto) return
    this.store.dispatch(
      actions.editar({
        id: this.todo.id,
        texto: this.txtInput.value
      }))
  }
  delete() {
    this.store.dispatch(actions.borrar({id: this.todo.id}))
  }

}
