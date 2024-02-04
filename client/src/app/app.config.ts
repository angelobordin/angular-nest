import { ApplicationConfig } from '@angular/core';
import { PreloadAllModules, provideRouter, withInMemoryScrolling, withPreloading } from '@angular/router';
import { provideEnvironmentNgxMask } from 'ngx-mask';
import { provideToastr } from 'ngx-toastr';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { Interceptor } from '../util/components/interceptor/http.interceptor';

export const appConfig: ApplicationConfig = {
	providers: [
		provideToastr(),
		provideEnvironmentNgxMask(),
		provideHttpClient(withInterceptors([Interceptor])),
		provideAnimations(),
		provideRouter(routes, withPreloading(PreloadAllModules), withInMemoryScrolling({ scrollPositionRestoration: 'enabled' })),
	],
};
