import {ChangeDetectionStrategy, Component, computed, signal} from '@angular/core';
import {DashboardHeaderComponent} from '../../../shared/dashboard-header/dashboard-header.component';
import {CardModule} from 'primeng/card';
import {JsonPipe} from '@angular/common';
import {DividerModule} from 'primeng/divider';
import {PanelModule} from 'primeng/panel';

@Component({
	selector: 'app-change-detection',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [
		DashboardHeaderComponent,
		CardModule,
		JsonPipe,
		DividerModule,
		PanelModule
	],
	templateUrl: './change-detection.component.html',
	styles: ``
})
export default class ChangeDetectionComponent {

	public currentFramework = computed(() =>
		`Cambio de detección en Angular - ${this.frameworkAsSignal().name}`);

	public frameworkAsSignal = signal({
		name: 'Angular',
		version: '17',
		releaseDate: '2023'
	});

	public frameworkAsProperty = {
		name: 'Angular',
		version: '17',
		releaseDate: '2023'
	};

	constructor() {
		setTimeout(() => {
			this.frameworkAsSignal.update(value =>
				({...value, name: 'React'}));

		}, 3000);
	}

}
