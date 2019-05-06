import { Routes } from '@angular/router';
import { ListaTestimoniosComponent } from './lista-testimonios/lista-testimonios.component';


export const TestimoniosRoutes: Routes = [
  {
    path: '',
    component: ListaTestimoniosComponent,
    data: { title: 'Listado', breadcrumb: 'LISTADO' }
  }
];