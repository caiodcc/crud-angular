import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  private apiUrl: any = "http://appcaio.decode.com.br/api";

  constructor(private http: HttpClient) { }


obterPedidos(buscarPor: any) {
  return this.http.get(this.apiUrl + '/pedidos/all' + buscarPor)
}
obterPedido(id: any) {
  return this.http.get(this.apiUrl + '/pedido/' + id);
}

criar(pedido: any){
  return this.http.post(this.apiUrl + '/pedidos/', pedido);
}

alterar(pedido: any) {
  return this.http.put(this.apiUrl + '/pedidos', pedido);
}


}
