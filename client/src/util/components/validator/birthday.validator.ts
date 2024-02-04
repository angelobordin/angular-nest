import { AbstractControl } from '@angular/forms';

export function dataMaximaValidator(control: AbstractControl) {
	const dataSelecionada = new Date(control.value);
	const dataAtual = new Date();
	if (dataSelecionada >= dataAtual) return { invalido: true };
	return null;
}
