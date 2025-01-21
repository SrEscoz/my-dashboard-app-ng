import {Component, OnInit} from '@angular/core';
import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';
import {AvatarModule} from 'primeng/avatar';
import {Ripple} from 'primeng/ripple';
import {StepperModule} from 'primeng/stepper';
import {DividerModule} from 'primeng/divider';

@Component({
	selector: 'dashboard-side-menu',
	standalone: true,
	imports: [
		MenuModule,
		AvatarModule,
		Ripple,
		StepperModule,
		DividerModule
	],
	templateUrl: './side-menu.component.html',
	styles: ``
})
export class SideMenuComponent implements OnInit {

	public items: MenuItem[] | undefined;

	ngOnInit(): void {
		this.items = [
			{
				label: 'Detección de cambios',
				icon: 'pi pi-eye',
				routerLink: '/dashboard/change-detection'
			},
			{
				label: 'Control de flujo',
				icon: 'pi pi-sitemap',
				routerLink: '/dashboard/control-flow'
			},
			{
				label: 'Opciones deferidas',
				icon: 'pi pi-clock',
				routerLink: '/dashboard/defer-options'
			},
			{
				label: 'Vistas deferidas',
				icon: 'pi pi-eye-slash',
				routerLink: '/dashboard/defer-views'
			},
			{
				label: 'Usuario',
				icon: 'pi pi-user',
				routerLink: '/dashboard/user/:id'
			},
			{
				label: 'Listado de usuarios',
				icon: 'pi pi-users',
				routerLink: '/dashboard/users-list'
			},
			{
				label: 'Transición de vistas',
				icon: 'pi pi-refresh',
				routerLink: '/dashboard/view-transition'
			}
		];
	}
}
