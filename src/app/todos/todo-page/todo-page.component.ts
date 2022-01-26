import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent implements OnInit {
  completados = false
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }
  toggleAll(){
    this.completados = !this.completados
    this.store.dispatch(actions.toggleAll({completado: this.completados}))
  }

}
