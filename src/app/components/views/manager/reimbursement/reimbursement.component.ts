import { Component, OnInit } from '@angular/core';
import { ManagerReimbService } from '../../../../services/manager-reimb.service';
import { User } from '../../../../models/User';
import { Reimbursement } from '../../../../models/Reimbursement';

@Component({
  selector: 'app-reimbursement',
  templateUrl: './reimbursement.component.html',
  styleUrls: ['./reimbursement.component.css']
})
export class ReimbursementComponent implements OnInit {

  user: User;
  reimb: Reimbursement;
  reimbModalActive = false;
  allColumnActive = false;
  status = '0';

  constructor(private manReimbService: ManagerReimbService) { }

  ngOnInit() {
    this.manReimbService.resetList();
    this.manReimbService.getAllPending(this);
  }

  viewReimbursement(reim: Reimbursement) {
    this.reimb = reim;
    this.user = reim.author;
    this.reimbModalActive = true;
  }

  approveReimbursement() {
    this.manReimbService.approve(this.reimb, this);
    this.closeModal();
    this.manReimbService.resetList();
    // this.manReimbService.getByStatus(this.status, this);
  }

  denyReimbursement() {
    this.manReimbService.deny(this.reimb, this);
    this.closeModal();
    this.manReimbService.resetList();
    // this.manReimbService.getByStatus(this.status, this);
  }
  closeModal() {
    this.reimb = undefined;
    this.user = undefined;
    this.reimbModalActive = false;
  }

  statusChange(event: Event) {
    this.status = event.target['attributes'].value.value;
    if (this.status === '-1') {
      this.allColumnActive = true;
      console.log('all');
    } else {
      console.log('here instead');
      this.allColumnActive = false;
    }
    this.manReimbService.resetList();
    this.manReimbService.getByStatus(this.status, this);
  }

  reimbNotResolved(): boolean {
    if (this.reimb.status !== 0) {
      return false;
    } else {
      return true;
    }
  }

  refresh() {
    this.manReimbService.getByStatus(this.status, this);
  }

}