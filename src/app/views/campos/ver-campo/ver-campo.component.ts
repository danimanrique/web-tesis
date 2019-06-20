import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CamposService } from 'app/shared/services/campos/campos.service';
import { CumpasService } from 'app/shared/services/cumpas/cumpas.service';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-ver-campo',
  templateUrl: './ver-campo.component.html',
  styleUrls: ['./ver-campo.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VerCamposComponent implements OnInit {

  @ViewChild('myTable') table: any;
  public idCampo: number;
  public campo: any;
  public cumpas: any;
  public recorrido: any;
  public modo_info = environment.modo_info;
  public expanded: any = {};

  constructor(
    private _route: ActivatedRoute,
    private _camposService: CamposService,
    private _cumpasService: CumpasService
  ) { }

  ngOnInit() {
    this.idCampo = parseInt(this._route.snapshot.params['id'], 10);
    this._camposService.getCampo(this.idCampo).subscribe(
      campo => {
        this.campo = campo;
        this._cumpasService.getCumpasByIdCampo(this.idCampo).subscribe(
          cumpas => {
            this.cumpas = cumpas;
          },
          error => {
            alert('Error al obtener los cumpas');
          }
        );
      },
      error => {
        alert('Error al obtener campo.');
      }
    );
  }

  getNombre(row) {
    if (row.id_cumpa.apellido1.match(/nn[0-9]*/i) &&
        row.id_cumpa.apellido2.match(/nn[0-9]*/i) &&
        row.id_cumpa.nombre1.match(/nn[0-9]*/i) &&
        row.id_cumpa.nombre2.match(/nn[0-9]*/i)) {
      return row.id_cumpa.apellido1.toUpperCase();
    } else {
      return row.id_cumpa.apellido1 + ' ' + row.id_cumpa.apellido2 + ' ' + row.id_cumpa.nombre1 + ' ' + row.id_cumpa.nombre2;
    }
  }

  toggleExpandRow(row) {
    this.table.rowDetail.toggleExpandRow(row);
  }

  onDetailToggle(event) {
    console.log('Detail Toggled', event);
  }

  encode(text) {
    return decodeURIComponent(escape(text));
  }
}

