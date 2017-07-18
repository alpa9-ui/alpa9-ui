import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule }  from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxErrorsModule,
    TranslateModule,
    TextMaskModule
  ],
  declarations: [
  ],
  exports: [
  ]
})
export class Alpa9UIModule {

}
