import {Alpa9UIConfig} from 'alpa9-ui/alpa9-ui';

export class AppComponent {

  constructor(private config: Alpa9UIConfig) {}

  changeConfig() {
    this.config.update({
      svgPath: 'new/path',
      ...,
    });
  }
}
