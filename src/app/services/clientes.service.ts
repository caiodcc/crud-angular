import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {


  private apiUrl: any = "http://appcaio.decode.com.br/api";

  constructor(private http: HttpClient) { }


  obterClientes(buscarPor: any) {
    return this.http.get(this.apiUrl + '/clientes/all' + buscarPor)
  }
  obterCliente(id: any) {
    return this.http.get(this.apiUrl + '/cliente/' + id);
  }

  criar(clientes: any){
    return this.http.post(this.apiUrl + '/cliente/', clientes);
  }

  alterar(clientes: any) {
    return this.http.put(this.apiUrl + '/cliente', clientes);
}


}
