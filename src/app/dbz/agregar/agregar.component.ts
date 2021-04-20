import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {


  @Input() nuevoPersonaje: Personaje = {
    nombre: '',
    poder: 0
  }

  //@Output() onNewCharacter: EventEmitter<Personaje> = new EventEmitter();

  constructor( private DbzService: DbzService ){


    
  }

  agregar( ){

    if( this.nuevoPersonaje.nombre.trim().length === 0 ){
      return;
    }

    //this.onNewCharacter.emit( this.nuevoPersonaje);

    this.DbzService.agregarPersonaje(this.nuevoPersonaje);

    this.nuevoPersonaje = {
      nombre: '',
      poder: 0
    }

  }

}
