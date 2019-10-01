import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Reimbursement } from '../models/Reimbursement';
import { ReimbursementComponent } from '../components/views/manager/reimbursement/reimbursement.component';

@Injectable({
  providedIn: 'root'
})
export class ManagerReimbService {
  public reimbList: Array<Reimbursement> = new Array();
  public listLoaded = false;

  constructor(private httpClient: HttpClient) { }

  getAllPending(caller: ReimbursementComponent) {
    this.getByStatus('0', caller);
  }

  getByStatus(status: string, caller: ReimbursementComponent) {
    console.log('Getting all pending');
    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders ({
        'Auth-Token': token,
        'Get-Status': status.toString()
      })
    };
    this.listLoaded = false;
    this.httpClient.get('http://localhost:8080/manager_reimbursement', httpOptions)
      .subscribe((list: Array<Reimbursement>) => {
        this.resetList();
        list.forEach(r => {
          this.reimbList.push(r);
        });
      }, () => {}, () => {
        this.listLoaded = true;
      });
  }
  approve(reimb: Reimbursement, caller: ReimbursementComponent) {
    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders ({
        'Auth-Token': token,
        'Get-Status': '1' // approve
      })
    };

    this.httpClient.put('http://localhost:8080/manager_reimbursement', reimb.id, httpOptions)
      .subscribe(() => {}, () => {}, () => {
        this.getByStatus(caller.status, caller);
      });
  }

  deny(reimb: Reimbursement, caller: ReimbursementComponent) {
    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders ({
        'Auth-Token': token,
        'Get-Status': '0' // approve
      })
    };

    this.httpClient.put('http://localhost:8080/manager_reimbursement', reimb.id, httpOptions)
      .subscribe(() => {}, () => {}, () => {
        this.getByStatus(caller.status, caller);
      });
  }
  resetList() {
    this.reimbList = new Array();
  }
}