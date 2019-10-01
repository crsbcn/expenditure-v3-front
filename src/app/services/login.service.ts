import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { UserToken } from '../app.component';
import { User } from '../models/User';

@Injectable()
export class LoginService {
    private userToken: UserToken;
    private token: string = undefined;
    private user: User;
    userReceived = false;
    public modalActive: boolean;
    constructor(private httpClient: HttpClient, private router: Router) {
        console.log('ls init');
        const token = localStorage.getItem('token');
        if (token) {
            this.getUserFromToken(token);
            this.token = token;
            this.router.navigateByUrl('/main');
        }
    }

    login(credentials: Object): boolean {
        if (this.isLoggedIn())  {
            console.log('Already logged in');
            return true;
        }
        this.userReceived = false;
        this.httpClient.post('http://localhost:8080/login', credentials)
            .subscribe((payload: UserToken) => {
                if (payload == null) {
                    this.modalActive = true;
                    return false;
                }
                this.userToken = payload;
                this.token = payload.auth_token;
                this.user = payload.user;
                // if (this.userToken == null) {
                //     this.modalActive = true;
                //     return false;
                // }

                this.token = this.userToken.auth_token;
                this.user = this.userToken.user;
                console.log('payload');
                console.log('pl: ' + this.getUser());
                localStorage.setItem('token', this.token);
                // this.getUserFromToken(this.token);
                this.router.navigateByUrl('/main');
                return true;
            }, () => {} , () => {this.userReceived = true; } );
    }

    getUserFromToken(token: string) {
        const tokenObject: object = {
            auth_token: token
        };
        const httpOptions = {
            headers: new HttpHeaders ({
              'Auth-Token': token
            })
          };

        this.httpClient.get('http://localhost:8080/login', httpOptions)
            .subscribe((payload: User) => {
                this.user = payload;
            });
    }

    public isLoggedIn(): boolean {
        this.token = localStorage.getItem('item');
        return this.token !== undefined && this.token !== null;
    }

    public getToken(): string {
        return this.token;
    }

    public resetToken() {
        this.token = undefined;
    }

    public getUser(): User {
        if (this.user === null || this.user === undefined) {
            return null;
        } else {
            return this.user;
        }
    }
}