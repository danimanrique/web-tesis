import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MapaService {
  public url: String;

  constructor(
    private _http: HttpClient,
  ) {
    this.url = environment.apiURL;
  }

  getDirecciones() {		//esto por cada funcion en el controlador que desee usar aca
    return this._http.get<any>(`${this.url}/getDirecciones`);
  }
  getDireccionesCentros(){   //esto por cada funcion en el controlador que desee usar aca
    return this._http.get<any>(`${this.url}/getDireccionesCentros`);
  }
/*
  getTestimonio(id) {
    return this._http.get<any>(`${this.url}/testimonio/${id}`);
  }

  getRecorridoByIdTestimoniante(id_testimoniante) {
    return this._http.get<any>(`${this.url}/recorrido?id_testimoniante=${id_testimoniante}`);
  }
*/

}
