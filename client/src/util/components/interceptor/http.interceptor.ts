import { ToastrModule } from 'ngx-toastr';
import { HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, catchError, throwError } from 'rxjs';

export const Interceptor = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
	const toastr = inject(ToastrService);

	// Response
	return next(req).pipe(
		catchError((error) => {
			if (error instanceof HttpErrorResponse) {
				if (error.status !== 200) toastr.error('', error.error, { timeOut: 5000 });
			}

			return throwError(error);
		})
	);
};
