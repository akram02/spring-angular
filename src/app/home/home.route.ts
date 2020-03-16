import {Route} from '@angular/router';

import {HomeComponent} from './home.component';

export const HOME_ROUTE: Route = {
  path: '',
  component: HomeComponent,
  data: {
    authorities: [],
    pageTitle: 'NITEX :: A tech-based supply chain company '
  }
};