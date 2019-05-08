import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class SessionsService {
  public url;
  public identity;
  public token;

  constructor(
    public _http: HttpClient,
    public _router: Router
  ) {
    this.url = environment.url;
    }

  signIn(user_to_login, gettoken = null){
    console.log("peticion: ",user_to_login, gettoken, this.url)
    if(gettoken != null){
        user_to_login.gettoken = gettoken;
    }
    return this._http.post<any>(this.url+'/usuarioadmin/login', user_to_login);
  }

  // signUp(user_to_register){
  //   let params = JSON.stringify(user_to_register);
  //   let headers = new Headers({'Content-Type': 'application/json', 'Authorization': this._storageService.getToken()});
  //   return this._http.post(this.url+'/usuario/sigunp', params, {headers:headers})
  //                    .map(res => res.json());
  // }

  logOut(){
    localStorage.clear();
    this._router.navigate(['sessions/signin']);
    this.identity = this.token = null;
  }

  getIdentity(){
    let identityIn;
    try{
      identityIn = JSON.parse(localStorage.getItem('identity'));
    }
    catch(ex){ console.log('no se ha logueado nadie aun') }
    if(identityIn != 'undefined'){
      this.identity = identityIn;
    }else{
      this.identity = null;
    }
    return this.identity;
  }

}

