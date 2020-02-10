import {Route} from '@angular/router';

import {ActivateComponent} from './activate.component';

export const activatedRoute: Route = {
  path: 'activate',
  component: ActivateComponent,
  data: {
    authorities: [],
    pageTitle: 'Activation'
  }
};
