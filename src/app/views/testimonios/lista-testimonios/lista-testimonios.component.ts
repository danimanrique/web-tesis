import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { TestimoniosService } from 'app/shared/services/testimonios/testimonios.service';
import { AppLoaderService } from 'app/shared/services/app-loader/app-loader.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-testimonios',
  templateUrl: './lista-testimonios.component.html',
  styleUrls: ['./lista-testimonios.component.scss'],
  providers: [TestimoniosService]
})
export class ListaTestimoniosComponent implements OnInit {

  @ViewChild('myTable') table: any;
  public testimonios = [];
  selected = [];

  constructor(
    private _testimoniosService: TestimoniosService,
    private _loaderService: AppLoaderService,
    private _router: Router
  ) {
    this.traeme();
  }

  ngOnInit() {
  }

  traeme() {
    this._loaderService.open('Cargando Datos');
    this._testimoniosService.getTestimonios().subscribe(
      res => {
        this._loaderService.close();
        this.testimonios = res;
      },
      error => {
        alert('Error al buscar testimonios.');
      }
    );
  }

  onSelect(selected) {
    this._router.navigate([`/testimonios/detalle/${selected.selected[0].id}`]);
  }

}
