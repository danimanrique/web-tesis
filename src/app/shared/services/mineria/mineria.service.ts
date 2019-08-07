import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MineriaService {

  public url: String;

  constructor(
    private _http: HttpClient,
  ) {
    this.url = environment.apiURL;
  }

  getHolaMundo() {
    return this._http.get<any>(`${this.url}/graficoEmbarazadas`);
  }
}

