import { Routes } from '@angular/router';
import { FormPersonComponent } from './form/form-person.component';
import { ListPersonComponent } from './list/list-person.component';

export default [
	{
		path: 'register',
		component: FormPersonComponent,
	},
	{
		path: 'list',
		component: ListPersonComponent,
	},
	{
		path: 'edit/:id',
		component: FormPersonComponent,
	},
] as Routes;
