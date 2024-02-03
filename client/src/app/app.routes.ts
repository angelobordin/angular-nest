import { LayoutComponent } from './layout/layout.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		component: LayoutComponent,
		children: [
			{
				path: 'person',
				loadChildren: () => import('./person/person.routes'),
			},
		],
	},
	{ path: '**', redirectTo: '' },
];
