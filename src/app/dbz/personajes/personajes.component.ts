import { Component, Input} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  //@Input() listaPersonajes: Personaje[] = [];

  get listaPersonajes() {
    return this.dbzService.listaPersonajes;
  }

  constructor( private dbzService: DbzService) {
    this.dbzService;
  }

}
