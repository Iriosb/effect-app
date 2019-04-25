import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as usuarioActions from '../actions';
import { map, mergeMap, tap, switchMap, catchError } from 'rxjs/operators';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';


@Injectable()
export class UsuarioEffects {

    constructor( private actions$: Actions, private usuarioService: UsuarioService) {}

    @Effect()
    cargarUsuario$: Observable<Action> = this.actions$
        .pipe( 
            ofType( usuarioActions.CARGAR_USUARIO),
            mergeMap( action => this.usuarioService.getUserById(action['id'])
                .pipe( 
                    map( user => new usuarioActions.CargarUsuarioSuccess(user)),
                    catchError( error => of(new usuarioActions.CargarUsuarioFail(error)) )
                )
            )
        );

        
}