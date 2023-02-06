import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private apiUrl: any = "http://appcaio.decode.com.br/api";

  constructor(private http: HttpClient) { }


  obterProdutos(buscarPor: any) {
    return this.http.get(this.apiUrl + '/produtos/all' + buscarPor)
  }
  obterProduto(id: any) {
    return this.http.get(this.apiUrl + '/produtos/' + id);
  }

  criar(produto: any){
    return this.http.post(this.apiUrl + '/produtos/', produto);
  }

  alterar(produto: any) {
    return this.http.put(this.apiUrl + '/produto', produto);
}


}
