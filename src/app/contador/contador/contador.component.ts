import { Component } from '@angular/core'

@Component({
    selector: 'app-contador',
    template:`
        <h1> {{titulo}} </h1>

        <h2> La base es: <strong>{{base}} </strong></h2>

        <button (click)=acumular(base)>+ {{base}}</button>

        <span>{{number}}</span> 

        <button (click)="acumular(-base)">- {{base}}</button>
    ` 
})

export class ContadorComponent  {
    titulo: string = 'Contador App';
    number: number = 0;

    base: number = 5;

    acumular(valor: number){
        this.number += valor;
  }
}