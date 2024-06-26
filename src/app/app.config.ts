import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';
import { ErrorInterceptor } from './Services/error.interceptor';
import { TokenInterceptor } from './Services/Token.Interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync() , provideHttpClient(withInterceptors([ErrorInterceptor,TokenInterceptor])) , provideToastr({closeButton:true})]
};
