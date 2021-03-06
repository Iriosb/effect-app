import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from 'src/app/store/app.reducer';
import { Store } from '@ngrx/store';
import * as usuarioActions from './../../store/actions';
import { usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {

  user: usuario;
  loading: boolean;
  error: any;

  constructor( private router: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit() {

    this.router.params.subscribe( params => {
      
      const id = params['id'];

      this.store.dispatch(new usuarioActions.CargarUsuario(id));
      
    });


    this.store.select('usuario')
      .subscribe( usuario => {
        this.user = usuario.user;
        this.loading = usuario.loading;
        this.error = usuario.error;
      })
  }

}
