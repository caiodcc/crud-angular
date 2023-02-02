import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-busca-usuario',
  templateUrl: './busca-usuario.component.html',
  styleUrls: ['./busca-usuario.component.css']
})

export class BuscaUsuarioComponent implements OnInit {

  public frm: FormGroup;
  public usuarios: any[] = [];

  constructor(private usuarioService: UsuarioService,
    private fb: FormBuilder) {

    this.frm = this.fb.group({
      buscarPor: ['', [Validators.maxLength(200)]],
    });

  }

  ngOnInit() {
    this.list();
  }

  list() {
    if (!this.frm.valid) return;

    let buscarPor = this.frm.value.buscarPor;

    this.usuarioService.obterUsuarios(buscarPor)
      .subscribe((result: any) => {
        this.usuarios = result;
      });
  }
}
