import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { PersonService } from './person.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
	selector: 'person',
	standalone: true,
	imports: [RouterOutlet],
	templateUrl: './person.component.html',
	styleUrl: './person.component.scss',
})
export class PersonComponent implements OnInit, OnDestroy {
	private _unsubscribeAll: Subject<any> = new Subject<any>();

	constructor() {}

	ngOnInit(): void {}

	ngOnDestroy(): void {
		this._unsubscribeAll.next(null);
		this._unsubscribeAll.complete();
	}
}
