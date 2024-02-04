import { Component, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

export interface ModalOptions {
	title: string;
	text: string;
	confirm: {
		message: string;
	};
}

@Component({
	selector: 'modal',
	templateUrl: './modal.component.html',
})
export class ModalComponent {
	@Input() data!: ModalOptions;

	constructor(public activeModal: NgbActiveModal) {}

	submit() {
		this.activeModal.close('confirmado');
	}

	fecharModal() {
		this.activeModal.close('fechado');
	}
}
