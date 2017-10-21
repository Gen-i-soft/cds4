// import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
// import 'rxjs/add/operator/map';

import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class CustomerProvider {



  constructor(public http: Http, @Inject('API_URL') private url: string) { }



getCustomers(token,user_id:string) {
  return new Promise((resolve, reject) => {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'x-access-token': token
    });
    let options = new RequestOptions({ headers: headers });
    this.http.get(`${this.url}/customers/${user_id}`, options)
      .map(res => res.json())
      .subscribe(data => {
        resolve(data)
      }, err => {
        reject(err)
      });
  });
}

getGroups(token: string) {
  return new Promise((resolve, reject) => {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'x-access-token': token
    });
    let options = new RequestOptions({ headers: headers });
    this.http.get(`${this.url}/customers/groups`, options)
      .map(res => res.json())
      .subscribe(data => {
        resolve(data)
      }, err => {
        reject(err)
      });
  });
}

saveCustomer(token: string, customer: any) {
  return new Promise((resolve, reject) => {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'x-access-token': token
    });
    let options = new RequestOptions({ headers: headers });
    let body = {
      iwho: customer.iwho,
      iwhat: customer.iwhat,
      iwhere: customer.iwhere,
      iwhen: customer.iwhen,
      iprovince: customer.iprovince,
      telephone: customer.telephone,
      email: customer.email,
      image: customer.image,
      image2: customer.image2,
      ihow: customer.ihow,
      ietc: customer.ietc,
      user_id: customer.user_id
    };
    /*
     iwho: this.iwho,
      iwhat: this.iwhat,
      iwhere: this.iwhere,
      iwhen: this.iwhen,
      iwhere: this.email,
      telephone: this.telephone,
      iprovince: this.iprovince,
      image: this.imageData,
      ihow: this.ihow,
      ietc: this.ietc,
      user_id : this.user_id
    */
    this.http.post(`${this.url}/customers`, body, options)
      .map(res => res.json())
      .subscribe(data => {
        resolve(data)
      }, err => {
        reject(err)
      });
  });
}

search(token: string, query: string,user_id:string) {
  return new Promise((resolve, reject) => {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'x-access-token': token
    });
    let options = new RequestOptions({ headers: headers });
    this.http.get(`${this.url}/customers/search/${query}`, options)
      .map(res => res.json())
      .subscribe(data => {
        resolve(data)
      }, err => {
        reject(err)
      });
  });
}

remove(token: string, customerId) {
  return new Promise((resolve, reject) => {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'x-access-token': token
    });
    let options = new RequestOptions({ headers: headers });

    this.http.delete(`${this.url}/customers/${customerId}`, options)
      .map(res => res.json())
      .subscribe(data => {
        resolve(data)
      }, err => {
        reject(err)
      });
  });
}

detail(token: string, customerId) {
  return new Promise((resolve, reject) => {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'x-access-token': token
    });
    let options = new RequestOptions({ headers: headers });
    this.http.get(`${this.url}/customers/detail/${customerId}`, options)
      .map(res => res.json())
      .subscribe(data => {
        resolve(data)
      }, err => {
        reject(err)
      });
  });
}

updateCustomer(token: string, customer: any) {
  return new Promise((resolve, reject) => {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'x-access-token': token
    });
    let options = new RequestOptions({ headers: headers });
    let body = {
      customerId: customer.id,
      firstName: customer.first_name,
      lastName: customer.last_name,
      sex: customer.sex,
      customerTypeId: customer.customer_type_id,
      telephone: customer.telephone,
      email: customer.email,
      image: customer.image
    };

    this.http.put(`${this.url}/customers`, body, options)
      .map(res => res.json())
      .subscribe(data => {
        resolve(data)
      }, err => {
        reject(err)
      });
  });
}

saveMap(token: string, customerId: number, lat: number, lng: number) {
  return new Promise((resolve, reject) => {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'x-access-token': token
    });
    let options = new RequestOptions({ headers: headers });
    let body = { customerId: customerId, lat: lat, lng: lng };

    this.http.post(`${this.url}/customers/save-map`, body, options)
      .map(res => res.json())
      .subscribe(data => {
        resolve(data)
      }, err => {
        reject(err)
      });
  });
}

getMap(token: string, customerId: number) {
  return new Promise((resolve, reject) => {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'x-access-token': token
    });
    let options = new RequestOptions({ headers: headers });

    this.http.get(`${this.url}/customers/get-map/${customerId}`, options)
      .map(res => res.json())
      .subscribe(data => {
        resolve(data)
      }, err => {
        reject(err)
      });
  });
}  

  
}
