import { Routes } from '@angular/router';
import { ListaTestimoniosComponent } from './lista-testimonios/lista-testimonios.component';
import { VerTestimonioComponent } from './ver-testimonio/ver-testimonio.component';


export const TestimoniosRoutes: Routes = [
  {
    path: '',
    component: ListaTestimoniosComponent,
    data: { title: 'Listado', breadcrumb: 'LISTADO' }
  },
  {
    path: 'detalle/:id',
    component: VerTestimonioComponent,
    data: { title: 'Detalle', breadcrumb: 'Detalle' }
  }
];
