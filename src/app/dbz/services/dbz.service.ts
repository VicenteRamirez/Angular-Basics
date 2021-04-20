import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';



@Injectable()
export class DbzService {

    private _listaPersonajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegeta',
          poder: 14000
        },
        {
          nombre: 'Picolo',
          poder: 5000
        }
      ];

    get listaPersonajes(): Personaje[] {
        return [...this._listaPersonajes];
    }
    
    constructor() {}

    agregarPersonaje( personaje: Personaje) {
        this._listaPersonajes.push( personaje );
    }



}