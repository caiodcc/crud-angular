import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PedidosService } from 'src/app/services/pedidos.service';

@Component({
  selector: 'app-busca-pedido',
  templateUrl: './busca-pedido.component.html',
  styleUrls: ['./busca-pedido.component.css']
})
export class BuscaPedidoComponent implements OnInit {

  public frm: FormGroup;
  public pedidos: any[] = [];

  constructor(private pedidosService: PedidosService,
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

    this.pedidosService.obterPedido(buscarPor)
      .subscribe((result: any) => {
        this.pedidos = result;
      });
  }
}
