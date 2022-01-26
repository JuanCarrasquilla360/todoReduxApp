import { Component, OnInit } from '@angular/core';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import { setFiltro } from '../../filter/filter.actions';
import { limpiar } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {
  filtroActual = 'todos'
  filtros = ['todos', 'completados', 'pendientes']
  pendientes = 0
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('filter').subscribe(filter => {
      this.filtroActual = filter
    })
    this.store.subscribe(state => {
      this.filtroActual = state.filter
      this.pendientes = state.todos.filter(todo => todo.completed === false).length
    })
  }
  selectFilter(filtro){
    this.store.dispatch(setFiltro({filter: filtro}))
  }
  limpiar(){
    this.store.dispatch(limpiar())
  }

}
