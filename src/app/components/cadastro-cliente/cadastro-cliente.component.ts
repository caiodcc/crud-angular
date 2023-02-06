import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  public frm:FormGroup
  id: any;
  clientesService: any;
  usuarioService: any;

  constructor(private fb:FormBuilder, private router:Router, clientesService: ClientesService) {
    this.frm = this.fb.group ({
      id: ['', [Validators.required]],
      nome: ['', [Validators.required, Validators.maxLength(200)]],
      cpf: ['', [Validators.required, Validators.maxLength(11)]],
      email: ['', [Validators.required, Validators.maxLength(200)]]
    })
  }


  ngOnInit() {
  }
  registroCliente(){
    if (!this.frm.valid) return;

    if (!this.id) {
      this.clientesService.criar(this.frm.value).subscribe((data: any) => {
        this.router.navigate(['/busca-cliente']);
      });
    }
    else {
      const data = {
        id: this.id,
        nome: this.frm.value.nome,
        email: this.frm.value.email,
        cpf: this.frm.value.cpf
      };

      this.clientesService.alterar(data).subscribe((data: any) => {
        this.router.navigate(['/busca-cliente']);
      });
    }
  }

}



