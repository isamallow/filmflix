import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// fazer a lazy loading
const routes: Routes = [
  // path vazio para as rotas de login e logout sejam na barra /login /logout
  // loadChildren pra ele só puxar o que eu pedi

  {
    path: '',
    loadChildren: () => import("./home/home.module").then((m) => m.HomeModule)
  },
  {
    path: 'auth',
    loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
