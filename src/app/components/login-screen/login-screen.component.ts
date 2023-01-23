import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})

export class LoginScreenComponent {

  public frm: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router) {
    this.frm = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.maxLength(200)]],
      senha: ['', [Validators.required, Validators.maxLength(200)]]
    });
  }

  entrar() {

    if (!this.frm.valid) return;

    let email = this.frm.value.email;
    let senha = this.frm.value.senha;

    this.go();
  }

  go() {
    this.router.navigate(['home']);
  }

}
