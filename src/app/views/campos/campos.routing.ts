import { Routes } from '@angular/router';
import { ListaCamposComponent } from './lista-campos/lista-campos.component';
import { VerCamposComponent } from './ver-campo/ver-campo.component';


export const CamposRoutes: Routes = [
  {
    path: '',
    component: ListaCamposComponent,
    data: { title: 'Listado', breadcrumb: 'LISTADO' }
  },
  {
    path: 'detalle/:id',
    component: VerCamposComponent,
    data: { title: 'Detalle', breadcrumb: 'Detalle' }
  }
];
