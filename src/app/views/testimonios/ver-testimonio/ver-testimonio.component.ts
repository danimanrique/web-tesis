import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TestimoniosService } from 'app/shared/services/testimonios/testimonios.service';
import { CumpasService } from 'app/shared/services/cumpas/cumpas.service';

@Component({
  selector: 'app-ver-testimonio',
  templateUrl: './ver-testimonio.component.html',
  styleUrls: ['./ver-testimonio.component.scss']
})
export class VerTestimonioComponent implements OnInit {

  public idTestimonio: number;
  public testimonio: any;
  public cumpas: any;

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
      },
      error => {
        alert('Error al obtener testimonio.');
      }
    );
  }

}
