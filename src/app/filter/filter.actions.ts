import { createAction, props } from '@ngrx/store'
export type validFilters = 'todos' | 'completados' | 'pendientes'
export const setFiltro = createAction(
    '[FILTER] Set filter',
    props<{ filter: string }>()
)