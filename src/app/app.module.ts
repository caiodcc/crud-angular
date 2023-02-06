import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuscaClienteComponent } from './components/busca-cliente/busca-cliente.component';
import { BuscaPedidoComponent } from './components/busca-pedido/busca-pedido.component';
import { BuscaProdutoComponent } from './components/busca-produto/busca-produto.component';
import { BuscaUsuarioComponent } from './components/busca-usuario/busca-usuario.component';
import { CadastraPedidoComponent } from './components/cadastra-pedido/cadastra-pedido.component';
import { CadastraProdutoComponent } from './components/cadastra-produto/cadastra-produto.component';
import { CadastroClienteComponent } from './components/cadastro-cliente/cadastro-cliente.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterScreenComponent } from './components/register-screen/register-screen.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BuscaClienteComponent,
    BuscaPedidoComponent,
    BuscaProdutoComponent,
    BuscaUsuarioComponent,
    CadastraPedidoComponent,
    CadastraProdutoComponent,
    CadastroClienteComponent,
    FooterComponent,
    LoginScreenComponent,
    RegisterScreenComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
