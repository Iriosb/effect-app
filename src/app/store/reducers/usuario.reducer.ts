import { usuario } from 'src/app/models/usuario.model';
import * as fromUsuario from './../actions';

export interface UsuarioState {
    user: usuario;
    loaded: boolean;
    loading: boolean;
    error: any;
}


const initState: UsuarioState = {
    user: null,
    loaded: false,
    loading: false,
    error: null
}


export function usuarioReducer(state = initState, action: fromUsuario.usuarioAcciones): UsuarioState {
    
    switch (action.type) {

        case fromUsuario.CARGAR_USUARIO:
            return {
                ...state, 
                loading: true,
                error: false
            };

        case fromUsuario.CARGAR_USUARIO_FAIL:
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

        case fromUsuario.CARGAR_USUARIO_SUCCESS:
            return {
                ...state, 
                loading: false,
                loaded: true,
                user: { ...action.usuario}
            };
    
        default:
            return state;
    }
}