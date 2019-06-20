import { Component, OnInit, ViewChild } from '@angular/core';
import { CamposService } from 'app/shared/services/campos/campos.service';
import { MatSort, MatTableDataSource } from '@angular/material';
import { AppLoaderService } from 'app/shared/services/app-loader/app-loader.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-campos',
  templateUrl: './lista-campos.component.html',
  styleUrls: ['./lista-campos.component.scss'],
  providers: [CamposService]
})
export class ListaCamposComponent implements OnInit {
  displayedColumns = ['abreviatura', 'descripcion', 'fecha_inicio_operaciones', 'fecha_fin_operaciones'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatSort) sort: MatSort;
  public campos = [];

  constructor(
    private _loaderService: AppLoaderService,
    private _camposService: CamposService,
    private _router: Router
  ) { }

  ngOnInit() {
    this._camposService.getCampos().subscribe(
      campos => {
        this.campos = campos;
        this.dataSource = new MatTableDataSource(campos);
        this.dataSource.sort = this.sort;
      },
      error => {
        alert('Error al recuperar los campos.');
      }
    );
  }

  onSelect(selected) {
    this._router.navigate([`/campos/detalle/${selected.id}`]);
  }

}
