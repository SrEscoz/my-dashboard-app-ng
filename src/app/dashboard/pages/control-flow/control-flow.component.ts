import {Component, signal} from '@angular/core';
import {CardModule} from 'primeng/card';
import {DividerModule} from 'primeng/divider';
import {Button} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {DashboardHeaderComponent} from '../../../shared/dashboard-header/dashboard-header.component';

type Grade = 'A' | 'B' | 'C' | 'F';

@Component({
	standalone: true,
	imports: [
		CardModule,
		DividerModule,
		Button,
		PanelModule,
		DashboardHeaderComponent
	],
	templateUrl: './control-flow.component.html',
	styles: ``
})
export default class ControlFlowComponent {

	public showContent = signal(true);
	public grade = signal<Grade>('A');
	public frameworks = signal<string[]>(['Angular', 'React', 'Vue']);

	public toggleContent(): void {
		this.showContent.update(value => !value);
	}
}
