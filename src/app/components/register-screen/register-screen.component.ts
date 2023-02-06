import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register-screen',
  templateUrl: './register-screen.component.html',
  styleUrls: ['./register-screen.component.css']
})

export class RegisterScreenComponent implements OnInit {

  public frm: FormGroup;
  public id: any;

  constructor(private usuarioService: UsuarioService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) {

    this.frm = this.fb.group({
      nome: ['', [Validators.required, Validators.maxLength(200)]],
      email: ['', [Validators.required, Validators.maxLength(200)]],
      senha: ['', [Validators.required, Validators.maxLength(100)]],
    });

  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    if (this.id) {
      this.usuarioService.obterUsuario(this.id)
        .subscribe((result: any) => {
          this.frm.controls["nome"].setValue(result.nome);
          this.frm.controls["email"].setValue(result.email);
          this.frm.controls["senha"].setValue(result.senha);
        });
    }
  }

  salvar() {
    if (!this.frm.valid) return;

    if (!this.id) { //criar um novo usuário
      this.usuarioService.criar(this.frm.value).subscribe((data: any) => {
        this.router.navigate(['/busca-usuario']);
      });
    }
    else { // alterar um usuário já cadastrado
      const data = {
        id: this.id,
        nome: this.frm.value.nome,
        email: this.frm.value.email,
        senha: this.frm.value.senha
      };

      this.usuarioService.alterar(data).subscribe((data: any) => {
        this.router.navigate(['/busca-usuario']);
      });
    }
  }

}
