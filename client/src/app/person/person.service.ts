import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPerson } from '../../util/interface/person';
import { BehaviorSubject, Observable, map, switchMap, take, tap } from 'rxjs';
import { GenericBackendResult } from '../../util/interface/backend-result';
import { ROUTE_DELETE_PERSON, ROUTE_PERSON_BY_ID, ROUTE_PERSON_LIST, ROUTE_REGISTER_PERSON, ROUTE_UPDATE_PERSON } from '../../util/routes/person.routes';

@Injectable({ providedIn: 'root' })
export class PersonService {
	private _person: BehaviorSubject<GenericBackendResult<IPerson> | null> = new BehaviorSubject<GenericBackendResult<IPerson> | null>(null);
	private _people: BehaviorSubject<GenericBackendResult<IPerson[]> | GenericBackendResult<[]>> = new BehaviorSubject<GenericBackendResult<IPerson[]> | GenericBackendResult<[]>>({
		status: 200,
		message: '',
		data: [],
	});

	constructor(private httpClient: HttpClient) {}

	get person$(): Observable<GenericBackendResult<IPerson> | null> {
		return this._person.asObservable();
	}

	get people$(): Observable<GenericBackendResult<IPerson[]>> {
		return this._people.asObservable();
	}

	loadPersonData(id: string): Observable<GenericBackendResult<IPerson>> {
		return this.httpClient.get<GenericBackendResult<IPerson>>(ROUTE_PERSON_BY_ID(id)).pipe(
			tap((response) => {
				if (response && response.data) this._person.next(response);
				return response;
			})
		);
	}

	getPersonList(): Observable<GenericBackendResult<IPerson[]>> {
		return this.httpClient.get<GenericBackendResult<IPerson[]>>(ROUTE_PERSON_LIST()).pipe(
			tap((response) => {
				this._people.next(response);
				return response;
			})
		);
	}

	registerPerson(personData: IPerson): Observable<GenericBackendResult<IPerson>> {
		return this.httpClient.post<GenericBackendResult<IPerson>>(ROUTE_REGISTER_PERSON(), personData).pipe(
			tap((response) => {
				return response;
			})
		);
	}

	updatePerson(id: string, personData: IPerson): Observable<GenericBackendResult<IPerson>> {
		return this.httpClient.patch<GenericBackendResult<IPerson>>(ROUTE_UPDATE_PERSON(id), personData).pipe(
			tap((response) => {
				this._person.next(response);
				return response;
			})
		);
	}

	deletePerson(id: string): Observable<GenericBackendResult<number>> {
		return this.httpClient.delete<GenericBackendResult<number>>(ROUTE_DELETE_PERSON(id)).pipe(
			tap((response) => {
				return response;
			})
		);
	}

	deletePersonInList(id: string): Observable<GenericBackendResult<number>> {
		return this.people$.pipe(
			take(1),
			switchMap((people) =>
				this.httpClient.delete<GenericBackendResult<number>>(ROUTE_DELETE_PERSON(id)).pipe(
					map((result) => {
						const pIndex = people.data.findIndex((p) => p.id.toString() === id);

						people.data.splice(pIndex, 1);
						this._people.next(people);

						return result;
					})
				)
			)
		);
	}
}
