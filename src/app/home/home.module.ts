import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {SharedModule} from '../shared/shared.module';
import {HOME_ROUTE} from './home.route';
import {HomeComponent} from './home.component';
import {TabsModule} from 'ngx-bootstrap';

@NgModule({
  imports: [SharedModule, RouterModule.forChild([HOME_ROUTE]), TabsModule.forRoot()],
  declarations: [HomeComponent],
  entryComponents: []
})
export class HomeModule {
}
