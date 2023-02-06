import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastra-pedido',
  templateUrl: './cadastra-pedido.component.html',
  styleUrls: ['./cadastra-pedido.component.css']
})
export class CadastraPedidoComponent implements OnInit {


  public frm: FormGroup

  constructor(private fb:FormBuilder, private router: Router) {

    this.frm = this.fb.group ({

      id: ['', [Validators.required]],
      clienteId: ['', [Validators.required]],
      produtoId: ['', [Validators.required]],
      quantidade:['', [Validators.required, Validators.minLength(1)]],
      valorProduto: ['', [Validators.required]],
      valorTotal: ['', [Validators.required, Validators.minLength(1)]],
      dataPedido:['', [Validators.required]]
    })
   }
   registraPedido(){
   if (!this.frm.valid) return;

    let id = this.frm.value.id;
    let clienteId = this.frm.value.clienteId;
    let produtoId = this.frm.value.produtoId;
    let quantidade = this.frm.value.quantidade;
    let valorProduto = this.frm.value.valorProduto;
    let valorTotal = this.frm.value.valorTotal;
    let dataPedido = this.frm.value.dataPedido;

    if(this.frm.valid) {
      return console.log('Validado')
    }

   }

  ngOnInit() {
  }

}
