import {Component, inject, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {PrimeNGConfig} from 'primeng/api';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

	private primeConfig = inject(PrimeNGConfig);

	title = 'my-dashboard-app-ng';

	ngOnInit(): void {
		this.primeConfig.ripple = true;
	}
}
