import {Component} from '@angular/core';
import {DashboardHeaderComponent} from '../../../shared/dashboard-header/dashboard-header.component';

@Component({
	selector: 'app-change-detection',
	standalone: true,
	imports: [
		DashboardHeaderComponent
	],
	templateUrl: './change-detection.component.html',
	styles: ``
})
export default class ChangeDetectionComponent {

}
