import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.models';
import * as actions from './todo.actions'

export const initialState: Todo[] = [
  new Todo('sapo perro')
];

const _todoReducer = createReducer(
  initialState,
  on(actions.crear, (state, { texto }) => [...state, new Todo(texto)]),
  on(actions.limpiar, state => state.filter(item => !item.completed)),
  on(actions.toggle, (state, { id }) => {
    return state.map(item => {
      if(item.id !== id) return item
      return {
        ...item,
        completed: !item.completed,
      }
    })
  }),
  on(actions.editar, (state, { id, texto }) => {
    return state.map(item => {
      if(item.id !== id) return item
      return {
        ...item,
        texto,
      }
    })
  }),
  on(actions.borrar, (state, { id }) => state.filter(item => item.id !== id)),
  on(actions.toggleAll, (state, { completado }) => {
    return state.map(item => {
      return {
        ...item,
        completed: completado
      }
    })
  }),
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}