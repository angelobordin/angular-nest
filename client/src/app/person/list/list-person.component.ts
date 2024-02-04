import { ModalComponent, ModalOptions } from './../../../util/components/modal/modal.component';
import { AsyncPipe, CommonModule, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgxMaskPipe } from 'ngx-mask';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Observable, Subject, takeUntil } from 'rxjs';
import { GenericBackendResult } from '../../../util/interface/backend-result';
import { IPerson } from '../../../util/interface/person';
import { PersonService } from '../person.service';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
	standalone: true,
	selector: 'list-person',
	templateUrl: './list-person.component.html',
	styleUrl: './list-person.component.scss',
	imports: [NgIf, NgFor, NgClass, CommonModule, MatIconModule, MatTooltipModule, AsyncPipe, NgxMaskPipe],
})
export class ListPersonComponent implements OnInit, OnDestroy {
	people$!: Observable<GenericBackendResult<IPerson[]>>;
	private _unsubscribeAll: Subject<any> = new Subject<any>();

	constructor(private service: PersonService, private _toastr: ToastrService, private _modalService: NgbModal, private _router: Router) {}

	ngOnInit(): void {
		this.people$ = this.service.people$;
	}

	ngOnDestroy(): void {
		this._unsubscribeAll.next(null);
		this._unsubscribeAll.complete();
	}

	editPerson(person: IPerson) {
		this._router.navigate([`/person/edit/${person.id}`]);
	}

	deletePerson(person: IPerson) {
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
					.deletePersonInList(person.id.toString())
					.pipe(takeUntil(this._unsubscribeAll))
					.subscribe((res) => {
						this._toastr.success('Sucesso!', res.message, { timeOut: 3000 });
					});
			}
		});
	}
}
