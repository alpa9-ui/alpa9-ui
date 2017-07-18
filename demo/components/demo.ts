import {Component} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

const demos: any = [];

const components: any = {};
var i = 0;
demos.forEach((demo: any) => {
  components[i++] = demo;
  // components[demo.key] = demo;
});

@Component({
  templateUrl: './demo.html',
})
export class DemoComponent {
  components = components;

  constructor(private translate: TranslateService) {}
  // constructor(
  //   private translate: TranslateService
  // ) {
  //   translate.addLangs(['en', 'pt']);
  //   translate.setDefaultLang('en');
  // }
}
