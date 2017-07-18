import {AppComponent} from '...';
import {Alapa9UIModule} from 'alpa9-ui/alpa9-ui';

@NgModule({
  imports: [..., Alapa9UIModule.forRoot()],
  declarations: [AppComponent, ...],
  bootstrap: [AppComponent],
})
export class AppModule {}
