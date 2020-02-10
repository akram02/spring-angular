import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {errorRoute} from './layouts/error/error.route';

const LAYOUT_ROUTES = [...errorRoute];

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: 'account',
          loadChildren: () => import('./account/account.module').then(m => m.AccountModule)
        },
        ...LAYOUT_ROUTES
      ]
      // , { enableTracing: isDevMode()}
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
