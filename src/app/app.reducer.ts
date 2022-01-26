import { ActionReducerMap } from "@ngrx/store";
import { validFilters } from "./filter/filter.actions";
import { filterReducer } from "./filter/filter.reducer";
import { Todo } from "./todos/models/todo.models";
import { todoReducer } from "./todos/todo.reducer";

export interface AppState {
    todos: Todo[],
    filter: string
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filter: filterReducer
}