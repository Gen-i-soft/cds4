import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController } from 'ionic-angular';

import { LoginProvider } from '../../providers/login/login';
import { TabsPage } from '../tabs/tabs';
import { IHttpResult } from '../../model';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  username: string;
  password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private loginProvider: LoginProvider,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    let loading = this.loadingCtrl.create({
      spinner: 'dots',
      content: 'Logging in..'
    });

    loading.present();

  

  
    this.loginProvider.login(this.username, this.password)
      .then((data: IHttpResult) => {

        loading.dismiss();
        
        if (data.ok) {
          localStorage.removeItem('token');
          localStorage.removeItem('username');
          localStorage.removeItem('id');


          localStorage.setItem('token', data.token);
          
          localStorage.setItem('id', data.userId);
          this.navCtrl.setRoot(TabsPage);
        } else {
          let alert = this.alertCtrl.create({
            title: 'Error!',
            subTitle: JSON.stringify(data.error),
            buttons: ['OK']
          });
          alert.present();
        }
      }, (error) => {
        loading.dismiss();
        let alert = this.alertCtrl.create({
          title: 'Error!',
          subTitle: JSON.stringify(error),
          buttons: ['OK']
        });
        alert.present();
      });
  }
}  

