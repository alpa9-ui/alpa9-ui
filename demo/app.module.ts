import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import { HttpModule, Http } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { NgxErrorsModule } from '@ultimate/ngxerrors';

import {RouterModule, PreloadAllModules} from '@angular/router';
import {routes} from './app.routing';

import {Alpa9UIModule} from '../src/alpa9-ui';
import {NglModule} from 'ng-lightning/ng-lightning';

import {AppComp} from './app';

export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, 'http://localhost:3001/api/i18n/');
}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes, { useHash: true, preloadingStrategy: PreloadAllModules }),
    HttpModule,
    Alpa9UIModule,
    NgxErrorsModule,
    NglModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    })
  ],
  declarations: [
    AppComp,
  ],
  bootstrap: [AppComp],
})
export class NglDemoModule {}
