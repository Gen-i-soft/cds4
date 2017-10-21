import { Injectable,Inject } from '@angular/core';
import { Http,Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginProvider {

  constructor(public http: Http,
     @Inject('API_URL') private url: string) {
    console.log('Hello LoginProvider Provider');
  }

  login(username: string, password: string) {
    return new Promise((resolve, reject) => {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      let body = { username: username, password: password };

      this.http.post(`${this.url}/users/login`, body, options)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data)
        }, err => {
          reject(err)
        });
    });

  }

}