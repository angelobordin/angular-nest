import { NgClass, CommonModule, DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { EMPTY, Subject, switchMap, takeUntil } from 'rxjs';
import { PersonService } from '../person.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent, ModalOptions } from '../../../util/components/modal/modal.component';
import { dataMaximaValidator } from '../../../util/components/validator/birthday.validator';

@Component({
	selector: 'form-person',
	standalone: true,
	templateUrl: './form-person.component.html',
	styleUrl: './form-person.component.scss',
	imports: [
		NgClass,
		FormsModule,
		MatFormFieldModule,
		MatSelectModule,
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
	inAction: boolean = false;
	action: string = 'register';
	private _unsubscribeAll: Subject<any> = new Subject<any>();

	constructor(
		private fb: FormBuilder,
		private service: PersonService,
		private _toastr: ToastrService,
		private _router: Router,
		private _activatedRoute: ActivatedRoute,
		private _modalService: NgbModal
	) {}

	ngOnInit(): void {
		this.today = new Date();
		this.form = this.fb.group({
			id: [''],
			cpf: ['', [Validators.required]],
			name: ['', [Validators.required]],
			birthday: ['', [Validators.required, dataMaximaValidator]],
			marital_status: ['', [Validators.required]],
			level_education: ['', [Validators.required]],
			created_at: [''],
			update_at: [''],
		});

		this._activatedRoute.paramMap
			.pipe(
				takeUntil(this._unsubscribeAll),
				switchMap((params) => {
					const personId = params.get('id');
					if (!personId) return EMPTY;

					return this.service.loadPersonData(personId);
				})
			)
			.subscribe((response) => {
				if (!response || !response.data) {
					this._toastr.error('', 'Usuário não localizado', { timeOut: 3000 });
					this._router.navigate(['/']);
				}

				this.form.patchValue({ ...response.data, birthday: response.data.birthday.split('T')[0] });
				this.action = 'edit';
			});
	}

	ngOnDestroy(): void {
		this._unsubscribeAll.next(null);
		this._unsubscribeAll.complete();
	}

	registerPerson() {
		this.inAction = true;

		this.service
			.registerPerson(this.form.value)
			.pipe(takeUntil(this._unsubscribeAll))
			.subscribe(
				(res) => {
					this._toastr.success('Sucesso!', res.message, { timeOut: 3000 });
					this._router.navigate([`/person/edit/${res.data.id}`]);
				},
				(err) => {
					this.inAction = false;
				}
			);
	}

	updatePerson() {
		this.service
			.updatePerson(this.form.value['id'], this.form.value)
			.pipe(takeUntil(this._unsubscribeAll))
			.subscribe(
				(res) => {
					this._toastr.success('Sucesso!', res.message, { timeOut: 3000 });
				},
				(err) => {
					this.inAction = false;
				}
			);
	}

	deletePerson() {
		const options: ModalOptions = {
			title: 'Deletando Registro',
			text: 'Deseja realmente excluir o registro?',
			confirm: {
				message: 'Deletar',
			},
		};

		const ref = this._modalService.open(ModalComponent, { centered: true });
		ref.componentInstance.data = options;
		ref.result.then((result) => {
			if (result === 'confirmado') {
				this.service
					.deletePerson(this.form.value['id'])
					.pipe(takeUntil(this._unsubscribeAll))
					.subscribe(
						(res) => {
							this._toastr.success('Sucesso!', res.message, { timeOut: 3000 });
							this._router.navigate([`/`]);
						},
						(err) => {
							this.inAction = false;
						}
					);
			}
		});
	}
}
