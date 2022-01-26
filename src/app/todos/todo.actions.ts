import { createAction, props } from '@ngrx/store';

export const crear = createAction(
    '[TODO] Crear ToDo',
    props<{ texto: string }>()
)
export const toggle = createAction(
    '[TODO] Toggle ToDo',
    props<{ id: number }>()
)
export const editar = createAction(
    '[TODO] Edit ToDo',
    props<{ id: number, texto: string }>()
)
export const borrar = createAction(
    '[TODO] Borrar ToDo',
    props<{ id: number }>()
)
export const toggleAll = createAction(
    '[TODO] ToggleAll ToDo',
    props<{ completado: boolean }>()
)
export const limpiar = createAction(
    '[TODO] ToggleAll ToDo'
)
