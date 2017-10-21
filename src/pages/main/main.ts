// import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { Component } from '@angular/core';
import {
  NavController,
  NavParams,
  LoadingController,
  AlertController, IonicPage
} from 'ionic-angular';
import { CustomerProvider } from '../../providers/customer/customer';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { HomePage } from '../../pages/home/home';
 import { AboutPage } from '../../pages/about/about';
 import { MapPage } from '../../pages/map/map';
//  import { GooglemapPage } from '../../pages/googlemap/googlemap';

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  customerLat: number;
  customerLng: number;
  
  groups: Array<any>;
  token: string;  
  user_id: string;
  customerId: number;
  sexes: Array<{ id: number, name: string }>;
 
  
  imageData: string;
  imageData2: string;
  imageData3: string;

  base64Image: string;
  base64Image2: string;
  base64Image3: string;


  iwho?: string;
  iwhat?: string;
  iwhere?: string;

  iprovince: number ;
  iprovinces: Array<{ id: number, name: string }>;

  iwhen?: string;
  ihow?: string;
  ietc?: string;

  telephone?: string;
  email?: string;

  image?: string;
  image2?: string;
  image3?: string;

  itype: number = 1;
  ilv1: number = 1;
  ilv2: number =1;
  is1: number =1;
  is2: string = '0';
  is3: string = '0';
  iclose: number =1;


  

  constructor(public navCtrl: NavController, public navParams: NavParams,
   
    
    public loadingCtrl: LoadingController,
    public customerProvider: CustomerProvider,
    public alertCtrl: AlertController,
    private camera: Camera) {
    
    
      this.token = localStorage.getItem('token');
      this.user_id = localStorage.getItem('id');
      this.customerId = this.navParams.get('id');
       this.customerLat = this.navParams.get('customerLat');
       this.customerLng = this.navParams.get('customerLng');
      // this.customerLat = 16.4321938;  ตัวอย่างการแทนค่าคะ
      // this.customerLng = 102.8236214;
      // this.imageData = "./assets/img/placeholder-customer.png" ;
      // this.imageData2 = "./assets/img/placeholder-customer.png";
       
    
        this.iprovinces = [
          { id: 1, name: 'จังหวัดสุรินทร์' },
          { id: 2, name: 'จังหวัดบุรีรัมย์' },
          { id: 3, name: 'จังหวัดชัยภูมิ' },
          { id: 4, name: 'จังหวัดนครราชสีมา' },
          { id: 5, name: '...เลือกจังหวัด...' }
  
        ];
    
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  ionViewWillEnter() {
    this.iwho = '',
    this.iwhat = '',
   this.iwhere = '',
    this.iwhen = '',
   this.email = '',
  this.telephone = '',
  this.iprovince = 5,
      this.base64Image = '';
      this.base64Image2 = '';  
    this.ihow = '',
   this.ietc =''
  }

  gotoMap() {
    // this.navCtrl.push(GooglemapPage);
  }

  save() {
    let customer = {
      iwho: this.iwho,
      iwhat: this.iwhat,
      iwhere: this.iwhere,
      iwhen: this.iwhen,
      email: this.email,
      telephone: this.telephone,
      iprovince: this.iprovince,
      image: this.imageData,
      image2: this.imageData2,
      ihow: this.ihow,
      ietc: this.ietc,
      user_id : this.user_id
    };


    let promise;
    
        if (this.customerId) {
          promise = this.customerProvider.updateCustomer(this.token, customer)
        } else {
          promise = this.customerProvider.saveCustomer(this.token, customer)
        }
    
        promise.then((data: any) => {
          if (data.ok) {
            this.navCtrl.push(AboutPage);
            //alert
          
           
            
            



               
            




          }


        
          
        }, (error) => {
          
          });
    
         
         
    
      }
    
      takePicture() {
        let options: CameraOptions = {
          destinationType: 0,
          sourceType: 1,
          allowEdit: true
        };
    
        this.camera.getPicture(options).then((imageData) => {
          this.imageData = imageData;
          this.base64Image = 'data:image/jpeg;base64,' + imageData;
        }, (err) => {
          // Handle error
        });
      }
    
    
      takePicture2() {
        let options: CameraOptions = {
          destinationType: 0,
          sourceType: 1,
          allowEdit: true
        };
    
        this.camera.getPicture(options).then((imageData2) => {
          this.imageData2 = imageData2;
          this.base64Image2 = 'data:image/jpeg;base64,' + imageData2;
        }, (err) => {
          // Handle error
        });
      }
    
    
      browsePicture() {
        let options: CameraOptions = {
          destinationType: 0,
          sourceType: 0,
          allowEdit: true
        };
        this.camera.getPicture(options).then((imageData) => {
          this.imageData = imageData;
          this.base64Image = 'data:image/jpeg;base64,' + imageData;
        }, (err) => {
          // Handle error
        });
      }
    
    
    
      browsePicture2() {
        let options: CameraOptions = {
          destinationType: 0,
          sourceType: 0,
          allowEdit: true
        };
        this.camera.getPicture(options).then((imageData2) => {
          this.imageData2 = imageData2;
          this.base64Image2 = 'data:image/jpeg;base64,' + imageData2;
        }, (err) => {
          // Handle error
        });
      }
  
      removePicture() {
        this.base64Image = '';
      }
  
  
      removePicture2() {
        this.base64Image2 = '';
      }
  
  

}//end
