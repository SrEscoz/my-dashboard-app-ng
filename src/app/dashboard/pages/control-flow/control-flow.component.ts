import {Component, signal} from '@angular/core';
import {CardModule} from 'primeng/card';
import {DividerModule} from 'primeng/divider';
import {Button} from 'primeng/button';
import {Ripple} from 'primeng/ripple';

type Grade = 'A' | 'B' | 'C' | 'F';

@Component({
	standalone: true,
	imports: [
		CardModule,
		DividerModule,
		Button
	],
	templateUrl: './control-flow.component.html',
	styles: ``
})
export default class ControlFlowComponent {

	public showContent = signal(false);
	public grade = signal<Grade>('B');

	public toggleContent(): void {
		this.showContent.update(value => !value);
	}
}
