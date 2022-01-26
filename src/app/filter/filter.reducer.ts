import { createReducer, on } from '@ngrx/store';
import * as actions from './filter.actions'

export const initialState: string = 'todos'

const _filterReducer = createReducer(
    initialState,
    on(actions.setFiltro, (state, { filter }) => filter),

);

export function filterReducer(state, action) {
    return _filterReducer(state, action);
}