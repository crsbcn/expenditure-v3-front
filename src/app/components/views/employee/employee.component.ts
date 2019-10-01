import { Component, OnInit } from '@angular/core';
import { ReimbursementService } from '../../../services/reimbursement.service';
import { Reimbursement } from '../../../models/Reimbursement';
import { User } from '../../../models/User';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  amount = '';
  description = '';
  type: number = undefined;
  dropdownIsActive = false;
  submitModalIsActive = false;
  viewModalActive = false;
  fileName: string;
  file: File;
  reimb: Reimbursement = undefined;
  manager: User = undefined;
  invalidInput = false;
  constructor(private reimbService: ReimbursementService) { }

  ngOnInit() {
    this.refresh();
  }

  dropdown() {
    this.dropdownIsActive = !this.dropdownIsActive;
  }

  newRequest() {
    this.dropdown();
    this.submitModalIsActive = true;
  }

  closeModal() {
    this.resetModal();
    this.reimb = undefined;
    this.manager = undefined;
    this.viewModalActive = false;
    this.submitModalIsActive = false;
  }

  resetModal() {
    this.amount = '';
    this.description = '';
    this.type = undefined;
    this.fileName = '';
    this.invalidInput = false;
  }

  getFileName(evt: any) {
    /* tslint:disable */ const file = evt.target.files[0]; /* tslint:enable */
    this.file = file;
    // console.log(this.file.type);
    this.fileName = file.name;
    // console.log(this.fileName);
  }

  submitNewRequest() {
    if (Number(this.amount) === NaN || this.amount === undefined) {
      console.log('Amount NaN');
      this.invalidInput = true;
      return;
    }
    if (this.type === undefined) {
      console.log('Select type');
      this.invalidInput = true;
      return;
    }
    const reimbDetail = {
      amount: Number(this.amount),
      description: this.description,
      type: this.type
    };
    this.reimbService.submitForm(reimbDetail, this);
    // this.reimbService.submitImage(this.file, this);

    this.resetModal();
    this.closeModal();
  }

  refresh() {
    this.reimbService.resetList();
    this.reimbService.getReimbursementOfUser();
  }

  viewReimbursement(reimb: Reimbursement) {
    this.viewModalActive = true;
    this.reimb = reimb;
    this.manager = reimb.resolver;
  }

}