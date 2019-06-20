import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaCamposComponent } from './lista-campos/lista-campos.component';
import { CamposRoutes } from './campos.routing';
import { RouterModule } from '@angular/router';
import { MatTableModule, MatSortModule, MatTabsModule, MatCardModule } from '@angular/material';
import { VerCamposComponent } from './ver-campo/ver-campo.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ListaCamposComponent, VerCamposComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(CamposRoutes),
    MatTableModule,
    MatTabsModule,
    MatSortModule,
    MatCardModule,
    NgxDatatableModule,
    FlexLayoutModule
  ]
})
export class CamposModule { }
