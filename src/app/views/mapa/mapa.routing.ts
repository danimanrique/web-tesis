import { Routes } from '@angular/router';
import { VerMapaComponent } from './ver-mapa/ver-mapa.component';
//import { VerTestimonioComponent } from './ver-testimonio/ver-testimonio.component';


export const MapaRoutes: Routes = [
  {
    path: '',
    component: VerMapaComponent,
    data: { title: 'Mapa', breadcrumb: 'Mapa' }
  }
];
