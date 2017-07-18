import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';

import {RouterModule} from '@angular/router';
import {routes} from './components.routing';
import { ReactiveFormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import {NglModule} from 'ng-lightning/ng-lightning';
import {Alpa9UIModule} from '../../src/alpa9-ui';

import {DemoComponent} from './demo';
import {PageComponent} from './page';

// import {Plunker} from './playground/plunker';

const DEMO_COMPONENTS = [
  DemoComponent
  // , Plunker
  , PageComponent
];

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    Alpa9UIModule,
    ReactiveFormsModule,
    NglModule,
    TranslateModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    ...DEMO_COMPONENTS,
  ],
  exports: [
    ...DEMO_COMPONENTS,
  ],
})
export class NglDemoComponentsModule {}
