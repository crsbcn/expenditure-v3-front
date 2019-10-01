import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';
import { User } from '../../../models/User';
import { ReimbursementService } from '../../../services/reimbursement.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: User;
  firstName: string;
  id: number;
  constructor(private loginService: LoginService, private reimbService: ReimbursementService, private router: Router) { }

  ngOnInit() {
    console.log('header init');
  }

  signout() {
    localStorage.removeItem('token');
    this.reimbService.resetList();
    this.loginService.resetToken();
    this.router.navigateByUrl('/');
  }

}