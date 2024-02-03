import { NgClass, CommonModule, DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { Subject } from 'rxjs';

@Component({
	selector: 'form-person',
	standalone: true,
	templateUrl: './form-person.component.html',
	styleUrl: './form-person.component.scss',
	imports: [
		FormsModule,
		MatFormFieldModule,
		NgClass,
		MatInputModule,
		ReactiveFormsModule,
		MatButtonModule,
		MatSelectModule,
		MatOptionModule,
		MatDatepickerModule,
		CommonModule,
		NgxMaskDirective,
		DatePipe,
	],
})
export class FormPersonComponent implements OnInit, OnDestroy {
	form!: FormGroup;
	today!: Date;
	private _unsubscribeAll: Subject<any> = new Subject<any>();

	constructor(private fb: FormBuilder) {}

	ngOnInit(): void {
		this.today = new Date();
		this.form = this.fb.group({
			id: [''],
			cpf: ['', [Validators.required]],
			name: ['', [Validators.required]],
			birthday: ['', [Validators.required]],
			marital_status: ['', [Validators.required]],
			level_education: ['', [Validators.required]],
			created_at: [''],
			update_at: [''],
		});
	}

	ngOnDestroy(): void {
		this._unsubscribeAll.next(null);
		this._unsubscribeAll.complete();
	}
}
