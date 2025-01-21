import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
	selector: 'dashboard-header',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './dashboard-header.component.html',
	styleUrl: './dashboard-header.component.css'
})
export class DashboardHeaderComponent {

	@Input() title!: string;
	@Input() icon!: string;

}
