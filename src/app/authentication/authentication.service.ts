import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public apiURL: string = "";
  constructor(private http: HttpClient) { }

  login(username: any, password: any) {
    const user = { username: username, password: password }
    sessionStorage.setItem('currentUser', JSON.stringify(user));
    return user;
  }

  logout() {
    sessionStorage.removeItem('currentUser');
  }
}