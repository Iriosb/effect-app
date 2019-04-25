import { Action } from '@ngrx/store';
import { usuario } from 'src/app/models/usuario.model';


export const CARGAR_USUARIO = '[Usuario] Cargar usuario';
export const CARGAR_USUARIO_FAIL = '[Usuario] Cargar usuario fail';
export const CARGAR_USUARIO_SUCCESS = '[Usuario] Cargar usuario success';

export class CargarUsuario implements Action {
    readonly type = CARGAR_USUARIO;

    constructor(public id: string) {}
}

export class CargarUsuarioFail implements Action {
    readonly type = CARGAR_USUARIO_FAIL;

    constructor(public payload: any) {}
}


export class CargarUsuarioSuccess implements Action {
    readonly type = CARGAR_USUARIO_SUCCESS;

    constructor(public usuario: usuario) {}
}


export type usuarioAcciones = CargarUsuario |
                               CargarUsuarioFail |
                               CargarUsuarioSuccess;
