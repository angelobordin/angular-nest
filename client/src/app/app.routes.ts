import { PersonComponent } from './person/person.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		component: PersonComponent,
		children: [
			{
				path: 'person',
				loadChildren: () => import('./person/person.routes'),
			},
		],
	},
	{ path: '**', redirectTo: '' },
];
