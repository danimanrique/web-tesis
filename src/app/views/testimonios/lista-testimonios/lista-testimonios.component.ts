import { Component, OnInit } from '@angular/core';
import { TestimoniosService } from 'app/shared/services/testimonios/testimonios.service';

@Component({
  selector: 'app-lista-testimonios',
  templateUrl: './lista-testimonios.component.html',
  styleUrls: ['./lista-testimonios.component.scss'],
  providers: [TestimoniosService]
})
export class ListaTestimoniosComponent implements OnInit {

  constructor(
    private _testimoniosService: TestimoniosService
  ) { }

  ngOnInit() {
  }

  traeme() {
    this._testimoniosService.getTestimonios().subscribe(
      res => {
        console.log(res);
      },
      error => {
        alert('Error');
      }
    );
  }

}
