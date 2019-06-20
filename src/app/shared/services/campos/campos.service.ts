import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CamposService {

  public url: String;

  constructor(
    private _http: HttpClient,
  ) {
    this.url = environment.apiURL;
  }

  getCampos() {
    return this._http.get<any>(`${this.url}/campo`);
  }

  getCampo(id) {
    return this._http.get<any>(`${this.url}/campo/${id}`);
  }

  getCumpasByIdCampo(id) {
    return this._http.get<any>(`${this.url}/vio?id_campo_actual=${id}`);
  }

  getTestimoniosByIdCampo(id) {
    return this._http.get<any>(`${this.url}/vio?id_campo_actual=${id}`);
  }
}
