import {Component} from '@angular/core';
import {DashboardHeaderComponent} from '../../../shared/dashboard-header/dashboard-header.component';
import {HeavyLoadersSlowComponent} from '../../../shared/heavy-loaders-slow/heavy-loaders-slow.component';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {CardModule} from 'primeng/card';
import {SkeletonModule} from 'primeng/skeleton';

@Component({
	standalone: true,
	imports: [
		DashboardHeaderComponent,
		HeavyLoadersSlowComponent,
		ProgressSpinnerModule,
		CardModule,
		SkeletonModule
	],
	templateUrl: './defer-views.component.html',
	styles: ``
})
export default class DeferViewsComponent {

}
