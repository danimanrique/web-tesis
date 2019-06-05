import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { TestimoniosService } from 'app/shared/services/testimonios/testimonios.service';
import { AppLoaderService } from 'app/shared/services/app-loader/app-loader.service';
import { Router } from '@angular/router';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { all } from 'q';

@Component({
  selector: 'app-lista-testimonios',
  templateUrl: './lista-testimonios.component.html',
  styleUrls: ['./lista-testimonios.component.scss'],
  providers: [TestimoniosService]
})
export class ListaTestimoniosComponent implements OnInit {
  displayedColumns = ['testimoniante', 'fecha_testimonio', 'campo', 'fuente', 'observaciones'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  public filtro = 'all';
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
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sortingDataAccessor = (item, property) => {
          switch (property) {
            case 'testimoniante': return item.id_testimoniante.nombre_completo;
            case 'campo': return item.id_campo_origen.descripcion;
            case 'fuente': return item.id_fuente.descripcion;
            default: return item[property];
          }
        };
        this.dataSource.sort = this.sort;
        this.cambiaFiltro();
      },
      error => {
        alert('Error al buscar testimonios.');
      }
    );
  }

  onSelect(selected) {
    this._router.navigate([`/testimonios/detalle/${selected.id}`]);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  cambiaFiltro() {
    console.log(this.filtro);
    switch (this.filtro) {
      case 'nombre': {
        this.dataSource.filterPredicate = (data, filter) => {
          return (data.id_testimoniante.nombre_completo && (data.id_testimoniante.nombre_completo).toLowerCase().includes(filter));
        };
        break;
      }
      case 'fecha': {
        this.dataSource.filterPredicate = (data, filter) => {
          return (data.fecha_testimonio && (data.fecha_testimonio).toLowerCase().includes(filter));
        };
        break;
      }
      case 'fuente': {
        this.dataSource.filterPredicate = (data, filter) => {
          return (data.id_fuente.descripcion && (data.id_fuente.descripcion).toLowerCase().includes(filter));
        };
        break;
      }
      case 'campo': {
        this.dataSource.filterPredicate = (data, filter) => {
          return (data.id_campo_origen.descripcion && (data.id_campo_origen.descripcion).toLowerCase().includes(filter));
        };
        break;
      }
      case 'observaciones': {
        this.dataSource.filterPredicate = (data, filter) => {
          return (data.observaciones && (data.observaciones).toLowerCase().includes(filter));
        };
        break;
      }
      default: {
        this.dataSource.filterPredicate = (data, filter) => {
          return (data.id_testimoniante.nombre_completo && (data.id_testimoniante.nombre_completo).toLowerCase().includes(filter)) ||
            (data.id_campo_origen.descripcion && (data.id_campo_origen.descripcion).toLowerCase().includes(filter)) ||
            (data.id_fuente.descripcion && (data.id_fuente.descripcion).toLowerCase().includes(filter)) ||
            (data.observaciones && (data.observaciones).toLowerCase().includes(filter)) ||
            (data.fecha_testimonio && (data.fecha_testimonio).toLowerCase().includes(filter));
        };
      }
    }
  }
}
