import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/views/main/main.component';
import { FileNotFoundComponent } from './components/error/file-not-found/file-not-found.component';
import { UnauthorizedComponent } from './components/error/unauthorized/unauthorized.component';

const routes: Routes = [
  {
    component: LoginComponent,
    path: ''
  },
  {
    component: MainComponent,
    path: 'main'
  },
  {
    component: UnauthorizedComponent,
    path: 'unauthorized'
  },
  {
    component: FileNotFoundComponent,
    path: '**'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }