import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
// import { ErrorComponent } from './error/error.component';
// import { ViewsComponent } from './components/views/views.component';
import { EmployeeComponent } from './components/views/employee/employee.component';
import { HeaderComponent } from './components/views/header/header.component';
import { MainComponent } from './components/views/main/main.component';
import { ManagerComponent } from './components/views/manager/manager.component';
import { LoginBodyComponent } from './components/login/login-body/login-body.component';
import { LoginFormComponent } from './components/login/login-form/login-form.component';
import { FileNotFoundComponent } from './components/error/file-not-found/file-not-found.component';
import { UnauthorizedComponent } from './components/error/unauthorized/unauthorized.component';
import { ServerErrorComponent } from './components/error/server-error/server-error.component';
import { ReimbursementComponent } from './components/views/manager/reimbursement/reimbursement.component';

@NgModule({
  declarations: [
    AppComponent,
    // NavbarComponent,
    HomepageComponent,
    LoginComponent,
    // ErrorComponent,
    // ViewsComponent,
    EmployeeComponent,
    HeaderComponent,
    MainComponent,
    ManagerComponent,
    LoginBodyComponent,
    LoginFormComponent,
    FileNotFoundComponent,
    UnauthorizedComponent,
    ServerErrorComponent,
    ReimbursementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
