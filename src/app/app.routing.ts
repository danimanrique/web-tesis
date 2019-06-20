import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './shared/components/layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './shared/components/layouts/auth-layout/auth-layout.component';
import { AuthGuard } from './shared/services/auth/auth.guard';

export const rootRouterConfig: Routes = [
  {
    path: '',
    redirectTo: 'others',
    pathMatch: 'full'
  },

  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'sessions',
        loadChildren: './views/sessions/sessions.module#SessionsModule',
        data: { title: 'Session' }
      }
    ]
  },
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'others',
        loadChildren: './views/others/others.module#OthersModule',
        data: { title: 'Inicio', breadcrumb: 'Inicio' }
      },
      {
        path: 'testimonios',
        loadChildren: './views/testimonios/testimonios.module#TestimoniosModule',
        data: { title: 'Testimonios', breadcrumb: 'Testimonios' }
      },
      {
        path: 'campos',
        loadChildren: './views/campos/campos.module#CamposModule',
        data: { title: 'Campos', breadcrumb: 'Campos' }
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'sessions/404'
  }
];

