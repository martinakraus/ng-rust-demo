import {bootstrapApplication} from '@angular/platform-browser';

import {AppComponent} from './app/app.component';
import {provideRouter} from "@angular/router";
import {APP_ROUTES} from "./app/routes";
import {importProvidersFrom} from "@angular/core";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(APP_ROUTES),
    importProvidersFrom(NoopAnimationsModule)
  ],

}).catch(err => console.error(err));
