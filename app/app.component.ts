import {Component} from '@angular/core';

@Component({
  selector: 'app',
  template: `
  	<h1>{{ title }} de {{ user.name }}</h1>
  		<div><label>Catégorie : </label> {{ operation.categorie }} </div>
  		<div><label>Commentaire : </label> {{ operation.commentaire }} </div>
  		<div><label>Destinataire : </label> {{ operation.destinataire }} </div>
  		<div><label>Emetteur : </label> {{ operation.emetteur }} </div>
  		<div><label>Montant : </label> {{ operation.montant }} euros</div>
  `
})

export class AppComponent {
	title = 'Comptes';
	user: User {
		name: 'Joseph';
		age : 35;
	};
	operation : Operation {
		categorie: 'salaire',
		commentaire : 'pas assez',
		destinataire : 'Joseph',
		emetteur : 'RnD',
		montant : 1000
  };
}

export class User {
	name: string;
	age : number;
}

export class Operation {
	categorie   : string;
	commentaire : string;
	destinataire: string;
	emetteur    : string;
	montant     : number;
}
