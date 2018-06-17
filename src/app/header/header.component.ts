import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'header-component',
	templateUrl: 'header.component.html',
	styleUrls: ['header.component.scss']
})
export class HeaderComponent {

	constructor(public router: Router) { }

}
