import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  constructor(public http: Http) {
    console.log('Hello UserProvider Provider');
  }


  // registerToken(token: string, deviceToken: string) {


  //   return new Promise((resolve, reject) => {
  //     let headers = new Headers({
  //       'Content-Type': 'application/json',
  //       'x-access-token': token
  //     });
  //     let options = new RequestOptions({ headers: headers });
  //     let body = { deviceToken: deviceToken };

  //     this.http.post(`${this.url}/fcm/register-device`, body, options)
  //       .map(res => res.json())
  //       .subscribe(data => {
  //         resolve(data)
  //       }, err => {
  //         reject(err)
  //       });
  //   });
  


}
