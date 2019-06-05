import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TestimoniosService {
  public url: String;

  constructor(
    private _http: HttpClient,
  ) {
    this.url = environment.apiURL;
  }

  getTestimonios() {
    return this._http.get<any>(`${this.url}/testimonio`);
  }

  getTestimonio(id) {
    return this._http.get<any>(`${this.url}/testimonio/${id}`);
  }

  getRecorridoByIdTestimoniante(id_testimoniante) {
    return this._http.get<any>(`${this.url}/recorrido?id_testimoniante=${id_testimoniante}`);
  }
}
