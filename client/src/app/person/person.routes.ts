import { Routes } from '@angular/router';
import { FormPersonComponent } from './form/form-person.component';
import { ListPersonComponent } from './list/list-person.component';
import { inject } from '@angular/core';
import { PersonService } from './person.service';

export default [
	{
		path: 'register',
		component: FormPersonComponent,
	},
	{
		path: 'list',
		component: ListPersonComponent,
		resolve: {
			list: () => inject(PersonService).getPersonList(),
		},
	},
	{
		path: 'edit/:id',
		component: FormPersonComponent,
	},
] as Routes;
