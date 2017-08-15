import {Component} from '@angular/core';

@Component({
    selector: 'app',
    template: `<h1>{{ name }}</h1>`
})
export class AppComponent {
    name: string;

    constructor() {
        this.name = 'Mes comptes';
    }
}