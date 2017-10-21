// import { Component } from '@angular/core';
// import { NavController } from 'ionic-angular';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController,
  ToastController,AlertController } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

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
    this.user_id = localStorage.getItem('id');
    this.url = 'http://192.168.1.11/cdsr9/frontend/web/index.php?r=pulldata/index3&hua_id=' + this.user_id; 
  ;
    
  }


  ionViewDidload() {
    this.showAlert();
  }

  ionViewWillEnter() {
    this.showAlert();
  }
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'หลังกดปุ่ม ตรวสอบสถานะเรื่องร้องเรียน!',
      subTitle: 'ระบบอาจใช้เวลาโหลดข้อมูลจากเซิฟเวอร์สักครู่ ....',
      buttons: ['OK']
    });
    alert.present();
  }


  openWebpage(url: string) {
    // this.showAlert();

    const options: InAppBrowserOptions = {
      zoom: 'no',
      location: 'no' 
      //  ใช้ปิดความลับได้ดีมาก กรณี ส่งไป yii2 เราว่ะ 555++ +  super trick
      
    }
  
    
    const browser = this.iab.create(url, '_self', options);
   


  }

}
