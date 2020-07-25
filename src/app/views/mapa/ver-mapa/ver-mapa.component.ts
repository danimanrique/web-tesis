import { Component, OnInit } from '@angular/core';
import { MapaService } from 'app/shared/services/mapa/mapa.service'

@Component({
  selector: 'app-ver-mapa',
  templateUrl: './ver-mapa.component.html',
  styleUrls: ['./ver-mapa.component.scss'],
  providers: [MapaService]
})
export class VerMapaComponent implements OnInit {
  //definir propiedades
  public map='vista en mapa';
  public marks=[];
// centros detencion
  public marksDetencion=[];


  constructor(
  	private _mapaService: MapaService
  	) { }

  ngOnInit() {
  	this._mapaService.getDirecciones().subscribe(
  		result => {
  			//this.marks = result.json()['result'];
  			 this.marks=result.direcciones;
	  		 //console.log(this.marks);
	  		},
  		error => {
  			console.error(error);
  		});
    this._mapaService.getDireccionesCentros().subscribe(
  		result => {
  			//this.marks = result.json()['result'];
  			this.marksDetencion=result.direccionesCentros;
	  		// console.log(this.marksDetencion);
	  		},
  		error => {
  			console.error(error);
  		});
  	}

  /*
  filterMarks(idsecuestro){
  	marks = marks.filter()
  }*/

  iconMap= {
    iconUrl:"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    // iconUrlUno:"http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|78E961",
    // iconUrlDos:"http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|207DEC",
    // iconUrlTres:"http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|EC7D20",
    iconHeigh:10,
  }

  public iconUrlFun(balance: number): string{
    if (balance ==1 ){
      return 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|78E961';
    }
    if (balance ==2 ){
      return 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|207DEC';
    }
    if (balance ==3 ){
      return 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|EC7D20';
    }
  }



}
