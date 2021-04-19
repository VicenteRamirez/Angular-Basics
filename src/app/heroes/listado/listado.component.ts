import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {


  heroes: string[] = ['Spiderman', 'Ironman', 'Thor', 'Hulk'];

  heroeBorrado: string = '';

  heroesBorradoslist: string[] = [];

  public borrarHeroe(){
    this.heroeBorrado = this.heroes.pop() || '';

    this.heroesBorradoslist.push(this.heroeBorrado);

  }

  

}
