import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-cadastra-produto',
  templateUrl: './cadastra-produto.component.html',
  styleUrls: ['./cadastra-produto.component.css']
})
export class CadastraProdutoComponent implements OnInit {


  public frm: FormGroup;

  constructor(private fb:FormBuilder, private router:Router) {

    this.frm = this.fb.group ({
      id: ['', [Validators.required, Validators.maxLength(3)]],
      nome: ['', [Validators.required, Validators.maxLength(200)]],
      valor: ['', [Validators.required, Validators.minLength(1)]],
      descricao: ['', [Validators.required, Validators.maxLength(2000)]]
    })


   }
   registrarProd() {

    if (!this.frm.valid) return;

    let id = this.frm.value.id;
    let nome = this.frm.value.nome;
    let valor = this.frm.value.valor;
    let descricao = this.frm.value.descricao;

    if(!this.frm.valid) {
      return console.log('Validado')
    }

    this.go();
  }
  go(){
    this.router.navigate(['home'])
  }

  ngOnInit() {
  }

}
