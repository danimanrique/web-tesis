import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TestimoniosService } from 'app/shared/services/testimonios/testimonios.service';
import { CumpasService } from 'app/shared/services/cumpas/cumpas.service';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-ver-testimonio',
  templateUrl: './ver-testimonio.component.html',
  styleUrls: ['./ver-testimonio.component.scss']
})
export class VerTestimonioComponent implements OnInit {

  public idTestimonio: number;
  public testimonio: any;
  public cumpas: any;
  public recorrido: any;
  public modo_info = environment.modo_info;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _testimoniosService: TestimoniosService,
    private _cumpasService: CumpasService
  ) { }

  ngOnInit() {
    this.idTestimonio = parseInt(this._route.snapshot.params['id'], 10);
    this._testimoniosService.getTestimonio(this.idTestimonio).subscribe(
      testimonio => {
        this.testimonio = testimonio;
        this._cumpasService.getCumpasByIdTestimonio(this.idTestimonio).subscribe(
          cumpas => {
            this.cumpas = cumpas;
          },
          error => {
            alert('Error al obtener los cumpas');
          }
        );
        this._testimoniosService.getRecorridoByIdTestimoniante(this.testimonio.id_testimoniante.id).subscribe(
          recorrido => {
            this.recorrido = recorrido;
          },
          error => {
            alert('Error al obtener recorrido');
          }
        );
      },
      error => {
        alert('Error al obtener testimonio.');
      }
    );
  }

  getNombre(row) {
    if (row.id_cumpa.apellido1.match(/nn[0-9]*/i) && row.id_cumpa.apellido2.match(/nn[0-9]*/i) && row.id_cumpa.nombre1.match(/nn[0-9]*/i) && row.id_cumpa.nombre2.match(/nn[0-9]*/i)) {
      return row.id_cumpa.apellido1.toUpperCase();
    } else {
      return row.id_cumpa.apellido1 + ' ' + row.id_cumpa.apellido2 + ' ' + row.id_cumpa.nombre1 + ' ' + row.id_cumpa.nombre2;
    }
  }

}
