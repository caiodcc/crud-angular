import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-busca-produto',
  templateUrl: './busca-produto.component.html',
  styleUrls: ['./busca-produto.component.css']
})
export class BuscaProdutoComponent implements OnInit {

  public frm: FormGroup;
  public produtos: any[] = []

  constructor(private produtoService: ProdutoService, private fb: FormBuilder) {

    this.frm = this.fb.group({
      buscarPor: ['', [Validators.maxLength(200)]],
    })

   }

  ngOnInit() {
    this.list();

  }


  list() {
    if (!this.frm.valid) return;

    let buscarPor = this.frm.value.buscarPor;

    this.produtoService.obterProdutos(buscarPor)
    .subscribe((result: any) => {
    this.produtos = result;
    });
  }}
