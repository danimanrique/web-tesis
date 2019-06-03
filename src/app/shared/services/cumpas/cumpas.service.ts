import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CumpasService {

  public url: String;

  constructor(
    private _http: HttpClient,
  ) {
    this.url = environment.apiURL;
  }

  getCumpasByIdTestimonio(id) {
    return this._http.get<any>(`${this.url}/vio?id_testimonio=${id}`);
  }

  getCumpa(id) {
    return this._http.get<any>(`${this.url}/cumpa/${id}`);
  }
}
