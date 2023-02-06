import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-busca-cliente',
  templateUrl: './busca-cliente.component.html',
  styleUrls: ['./busca-cliente.component.css']
})
export class BuscaClienteComponent implements OnInit {

  public frm: FormGroup;
  public clientes: any[] = [];

  constructor(private clientesService: ClientesService,
    private fb: FormBuilder) {

      this.frm = this.fb.group({
        buscarPor: ['', [Validators.maxLength(200)]],
      });

     }

  ngOnInit() {
    this.list()
  }

  list() {
    if (!this.frm.valid) return;

    let buscarPor = this.frm.value.buscarPor;

    this.clientesService.obterClientes(buscarPor)
      .subscribe((result: any) => {
        this.clientes = result;
      });
  }
}
