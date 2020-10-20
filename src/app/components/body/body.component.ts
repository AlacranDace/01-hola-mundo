import {Component} from '@angular/core';


@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})

export class BodyComponent {

    mostrar = true;

    frase: any = {
        mensaje: 'Un gran poder requiere una gran responsabilidad',
        author: 'Ben Parker'
    };

    personajes: string[] = ['Spiderman', 'Venom', 'Doc Octopus', 'Linterna Verde' , 'Superman', 'Superwoman', 'Black Panter', 'Ironman', 'Hulk', 'Capitan America', 'Antman', 'Batwoman' ];


}