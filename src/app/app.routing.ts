import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { SigninComponent } from './pages/signin/signin.component';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full',
  }, {
    path: 'technology', component: AdminLayoutComponent, children: [{ path: '', loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule' }]
  },
  {
    path: '**',
    redirectTo: 'signin'
  },
  {
    path: 'signin',
    component: SigninComponent
  }

]
