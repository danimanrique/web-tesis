import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MapaRoutes } from './mapa.routing';
import { VerMapaComponent } from './ver-mapa/ver-mapa.component';

//angular google maps
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [VerMapaComponent],
  imports: [

    CommonModule,
    RouterModule.forChild(MapaRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCa-eMPiSswwQqwc4HCSmLYdUo2gZVw8XI'
    })
  ]
})
export class MapaModule { }
