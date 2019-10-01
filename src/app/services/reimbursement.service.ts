import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Reimbursement } from '../models/Reimbursement';
import { CurrencyPipe } from '@angular/common';
import { EmployeeComponent } from '../components/views/employee/employee.component';
import { Router } from '@angular/router';

@Injectable()
export class ReimbursementService implements OnInit {
    public list: Array<Reimbursement> = new Array();
    public reimbursementsLoaded = false;
    constructor(private router: Router, private httpClient: HttpClient) {
        // this.list = new Array();
        // this.getReimbursementOfUser();
        if (!localStorage.getItem('token')) {
            console.log('not logged in');
            this.router.navigateByUrl('unauthorized');
        }
    }

    ngOnInit() {
    }
    submitForm(reimbDetails: object, caller: EmployeeComponent) {
        // console.log(reimbDetails);
        const token = localStorage.getItem('token');
        const httpOptions = {
            headers: new HttpHeaders ({
              'Auth-Token': token
            })
          };
        this.reimbursementsLoaded = false;
        this.httpClient.post('http://localhost:8080/main', reimbDetails, httpOptions)
            .subscribe(() => {}, () => {}, () => {
                this.reimbursementsLoaded = true;
                caller.refresh();
            });
    }

    // submitImage(file: File, caller: EmployeeComponent){
    //     const token = localStorage.getItem('token');
    //     const httpOptions = {
    //         headers: new HttpHeaders ({
    //           'Auth-Token': token
    //         })
    //       };

    //     this.httpClient.post('http://localhost:8080/image', file, httpOptions)
    //       .subscribe(() => {});
    // }

    getReimbursementOfUser() {
        const token = localStorage.getItem('token');
        const httpOptions = {
            headers: new HttpHeaders ({
              'Auth-Token': token
            })
          };
          this.reimbursementsLoaded = false;
        this.httpClient.get('http://localhost:8080/main', httpOptions)
        .subscribe((list: Array<Reimbursement>) => {
            // console.log(list);
            list.forEach(r => {
                // console.log(r);
                this.list.push(r);
            });
        }, () => {} , () => {
            this.reimbursementsLoaded = true;
        });
    }

    resetList() {
        this.list = new Array();
    }
}