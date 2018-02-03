import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
  authToken;
  currentUser: string;
  private headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
  constructor(private http: Http) { }

  // Function to login user
  login(user) {
    let body =`username=${user.username}&password=${user.password}`;
    return this.http.post('/api/frontend/login', body, { headers: this.headers })
      .map(res => res.json());
  }

  //Function to logout from current session
  logout(){
    this.authToken = null;
    this.currentUser = null;
    localStorage.clear();
  }

  // Function to store user data with token in local storage
  storeUserData(token, username) {
    localStorage.setItem('token', token);
    localStorage.setItem('currentUser', JSON.stringify(username));
    this.authToken = token;
    this.currentUser = username; 
  }

  loggedIn() {
    return tokenNotExpired();
  }
}
