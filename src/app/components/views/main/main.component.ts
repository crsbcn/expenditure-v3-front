import { Component, OnInit } from '@angular/core';
import { ReimbursementService } from '../../../services/reimbursement.service';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  role = -1;
  constructor(private reimbService: ReimbursementService, private loginService: LoginService) {
  }

  ngOnInit() {

  }

  switchRole(): number {
    if (this.loginService.getUser !== null) {
      return this.loginService.getUser().role;
    } else {
      return -1;
    }
  }


}