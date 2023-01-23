import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  public frm:FormGroup

  constructor(private fb:FormBuilder, private router:Router) {
    this.frm = this.fb.group ({
      id: ['', [Validators.required]],
      nome: ['', [Validators.required, Validators.maxLength(200)]],
      cpf: ['', [Validators.required, Validators.maxLength(11)]]
    })
  }
  registroCliente(){
    if(!this.frm.valid) return;
    let id = this.frm.value.id;
    let nome = this.frm.value.nome;
    let cpf = this.frm.value.cpf;

  }

  ngOnInit() {
  }

}
