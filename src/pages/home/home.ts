// import { Component } from '@angular/core';
// import { NavController } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController,
  ToastController,AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  url: string;
  urls: any[];
  user_id: string;

  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    private iab: InAppBrowser,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController
  ) {

  }


  gotoSurin(url: string) {
    const options: InAppBrowserOptions = {
      zoom: 'no',
      location: 'no' 
      //  ใช้ปิดความลับได้ดีมาก กรณี ส่งไป yii2 เราว่ะ 555++ +  super trick
      
    }
  
    
    const browser = this.iab.create(url, '_self', options);
   


  }
  }


