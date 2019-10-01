import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  username = '';
  password = '';
  modalActive: boolean;
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.modalActive = false;
    const loggedIn = this.loginService.isLoggedIn();
    if (loggedIn) {
      this.router.navigateByUrl('/main');
    }
  }

  login() {
    const credentials = {
      username: this.username,
      password: this.password
    };
    // if (!this.loginService.login(credentials)) {
    //   this.modalActive = true;
    // }
    this.loginService.login(credentials);
  }

  closeModal() {
    this.loginService.modalActive = false;
  }

}