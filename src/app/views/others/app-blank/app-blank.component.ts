import { Component, OnInit } from '@angular/core';
import { MineriaService } from 'app/shared/services/mineria/mineria.service';

@Component({
  selector: 'app-blank',
  templateUrl: './app-blank.component.html',
  styleUrls: ['./app-blank.component.css']
})
export class AppBlankComponent implements OnInit {

  public hola = 'por defecto';

  constructor(
    private _mineriaService: MineriaService
  ) { }

  ngOnInit() {
   /* this._mineriaService.getHolaMundo().subscribe(
      res => {
        this.hola = res;
      },
      error => {
        alert(error.error);
      }
    ); */
  }

}
