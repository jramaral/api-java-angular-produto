import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {ProdutoComponent} from './produto/produto.component';
// import {ListaCursoComponent} from './curso/lista-curso/lista-curso.component';
// import {LoginComponent} from './user/login/login.component';
// import {UserComponent} from './user/user.component';
// import {RegisterComponent} from './user/register/register.component';
// import {MeusCursosComponent} from './curso/meus-cursos/meus-cursos.component';
// import {ContatoComponent} from './contato/contato.component';
// import {AdminComponent} from './administrativo/admin/admin.component';
// import {AdmComponent} from './administrativo/adm/adm.component';

const routes: Routes = [

  {path: 'produtos', component: ProdutoComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
