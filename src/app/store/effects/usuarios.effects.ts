import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as usuariosActions from '../actions';
import { map, mergeMap, tap, switchMap, catchError } from 'rxjs/operators';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';


@Injectable()
export class UsuariosEffects {

    constructor( private actions$: Actions, private usuariosService: UsuarioService) {}

    @Effect()
    cargarUsuarios$: Observable<Action> = this.actions$
        .pipe( 
            ofType( usuariosActions.CARGAR_USUARIOS),
            mergeMap( () =>  this.usuariosService.getUsers()
                .pipe( 
                    map( users => new usuariosActions.CargarUsuariosSuccess(users)),
                    catchError( error => of(new usuariosActions.CargarUsuariosFail(error)) )
                )
            )
        );

        
}