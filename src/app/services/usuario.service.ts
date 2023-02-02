import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    //private apiUrl: any = "http://appcaio.decode.com.br/api";
    private apiUrl: any = "http://localhost:61686/api";

    constructor(private http: HttpClient) { }


    obterUsuarios(buscarPor: any) {
        return this.http.get(this.apiUrl + '/usuarios/all/' + buscarPor);
    }

    obterUsuario(id: any) {
        return this.http.get(this.apiUrl + '/usuarios/' + id);
    }

    criar(usuario: any) {
        return this.http.post(this.apiUrl + '/usuarios', usuario);
    }

    alterar(usuario: any) {
        return this.http.put(this.apiUrl + '/usuarios', usuario);
    }
}