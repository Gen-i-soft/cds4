import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Push, PushObject, PushOptions } from '@ionic-native/push';

import { UserProvider } from '../../providers/user/user';
@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {
  accept: any;

  constructor(private push: Push,
    public userProvider: UserProvider,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }





/* old */
  
  changeToggle() {


    console.log(this.accept);

    const options: PushOptions = {
      android: {
        // senderID: '482898982339'

      },
      ios: {
          alert: 'true',
          badge: true,
          sound: 'false'
      },
      windows: {},
      browser: {
          pushServiceURL: 'http://push.api.phonegap.com/v1/push'
      }
   };
   
    if (this.accept) {
      // register device
      var push = this.push.init({
        android: {
          // senderID: '482898982339'
        },
        ios: {
          alert: 'true',
          badge: true,
          sound: 'false'
        },
        windows: {}
      });


      // pushObject.on('notification').subscribe((notification: any) => console.log('Received a notification', notification));
      
      push.on('registration').subscribe((registration: any) => console.log('Device registered', registration));
      
      // pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));

      // push.on('registration', (response) => {
      //   console.log(response);
      //   let token = localStorage.getItem('token');
      //   let deviceToken = response.registrationId;

      //   this.userProvider.registerToken(token, deviceToken)
      //     .then((data: any) => {
      //       // success
      //       console.log('success');
      //     }, (error) => {
      //       console.log(error);
      //     });
      // });

      // push.on('notification', function (data) {
      //   console.log(data);
      // });
    }
  
  }



}//end
