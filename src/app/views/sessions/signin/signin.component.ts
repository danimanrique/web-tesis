import { Component, OnInit, ViewChild } from '@angular/core';
import { MatProgressBar, MatButton } from '@angular/material';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { SessionsService } from 'app/shared/services/sessions/sessions.service';
import { Router } from '@angular/router';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers: [SessionsService]
})
export class SigninComponent implements OnInit {
  @ViewChild(MatProgressBar) progressBar: MatProgressBar;
  @ViewChild(MatButton) submitButton: MatButton;

  public signinForm: FormGroup;
  public error: boolean;
  public token;
  public status;

  constructor(
    private _sessionService: SessionsService,
    private _router: Router
  ) {
    this.error = false;
  }

  ngOnInit() {
    if(localStorage.getItem('token')) {
      this._router.navigate(['/others']);
    } else {
      this.signinForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.pattern(EMAIL_REGEX)]),
        password: new FormControl('', Validators.required)
      });
    }
  }

  signin() {
    this.error = false;
    const signinData = this.signinForm.value;
    this._sessionService.signIn(signinData).subscribe(
      result => {
        const identity = result;
        if(!identity || !identity.user.id){
          console.log('El usuario no se ha logueado coorectamente: id incorrecto')
        }else{
          //Obtencion del token
          this._sessionService.signIn(signinData, 'true').subscribe(
            response => {
              this.token = response.token;
              if(this.token.length <= 0){console.log('El token no se ha generado');}
              else{
                localStorage.setItem('token',this.token);
                this.status = 'success';
                this._router.navigate(['/others']);
              }
            },
            error => {console.log("Error al obtener el token")}
          );
        }
      },
      error => {
        this.error = true;
        this.submitButton.disabled = false;
        this.progressBar.mode = 'determinate';
        var errorMsg = <any>error;
        if(errorMsg != null){
          console.log(error)
          var body = JSON.parse(error._body);
          this.status = 'error';
        }
      }
    );
    this.submitButton.disabled = true;
    this.progressBar.mode = 'indeterminate';
  }

}
