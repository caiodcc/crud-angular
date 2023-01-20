import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterScreenComponent } from './components/register-screen/register-screen.component';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';

const routes: Routes = [
  {path: 'navbar-logged', component: NavbarComponent},
  {path: 'login-screen', component: LoginScreenComponent},
  {path:'register-screen', component: RegisterScreenComponent},
  {path:'app-footer', component: FooterComponent},
  {path:'', redirectTo: 'login-screen', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
