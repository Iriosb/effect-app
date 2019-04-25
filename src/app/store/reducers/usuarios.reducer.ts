import { usuario } from 'src/app/models/usuario.model';
import * as fromUsuarios from './../actions';
import { load } from '@angular/core/src/render3';

export interface UsuariosState {
    users: usuario[];
    loaded: boolean;
    loading: boolean;
    error: any;
}


const initState: UsuariosState = {
    users: [],
    loaded: false,
    loading: false,
    error: null
}


export function usuariosReducer(state = initState, action: fromUsuarios.usuariosAcciones): UsuariosState {
    switch (action.type) {


        case fromUsuarios.CARGAR_USUARIOS:
            return {
                ...state, 
                loading: true,
                error: false
            };

        case fromUsuarios.CARGAR_USUARIOS_FAIL:
            return {
                ...state, 
                loading: false,
                loaded: false,
                error: {
                    status: action.payload.status,
                    message: action.payload.message,
                    url: action.payload.url
                }

            };

        case fromUsuarios.CARGAR_USUARIOS_SUCCESS:
            return {
                ...state, 
                loading: false,
                loaded: true,
                users: [ ...action.usuarios]
            };
    
        default:
            return state;
    }
}