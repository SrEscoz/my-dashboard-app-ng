import {Component, Input} from '@angular/core';
import {CardModule} from 'primeng/card';

@Component({
	selector: 'heavy-loader-slow',
	standalone: true,
	imports: [
		CardModule
	],
	templateUrl: './heavy-loaders-slow.component.html',
	styles: ``
})
export class HeavyLoadersSlowComponent {

	@Input({required: true}) cssClass!: string;

	constructor() {
		const start = Date.now();

		while (Date.now() - start < 1500) {
			// Código bloqueante
		}
	}

}
