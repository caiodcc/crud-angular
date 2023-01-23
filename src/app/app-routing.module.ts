import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterScreenComponent } from './components/register-screen/register-screen.component';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';
//import { FooterComponent } from './components/footer/footer.component';
import { BuscaUsuarioComponent } from './components/busca-usuario/busca-usuario.component';
import { CadastroClienteComponent } from './components/cadastro-cliente/cadastro-cliente.component';
import { CadastraProdutoComponent } from './components/cadastra-produto/cadastra-produto.component';
import { BuscaProdutoComponent } from './components/busca-produto/busca-produto.component';
import { CadastraPedidoComponent } from './components/cadastra-pedido/cadastra-pedido.component';
import { BuscaPedidoComponent } from './components/busca-pedido/busca-pedido.component';
import { BuscaClienteComponent } from './components/busca-cliente/busca-cliente.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '',  component: LoginScreenComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  //{path:'navbar-logged', component: NavbarComponent},
  { path: 'login-screen', component: LoginScreenComponent },
  { path: 'register-screen', component: RegisterScreenComponent },
  //{path:'app-footer', component: FooterComponent},
  { path: 'busca-usuario', component: BuscaUsuarioComponent },
  { path: 'cadastro-cliente', component: CadastroClienteComponent },
  { path: 'cadastra-produto', component: CadastraProdutoComponent },
  { path: 'busca-produto', component: BuscaProdutoComponent },
  { path: 'cadastra-pedido', component: CadastraPedidoComponent },
  { path: 'busca-pedido', component: BuscaPedidoComponent },
  { path: 'busca-cliente', component: BuscaClienteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
