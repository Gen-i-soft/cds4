
import { Component } from '@angular/core';
// import { Geolocation } from 'ionic-native';
import { Geolocation } from '@ionic-native/geolocation';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import {
  NavController,
  NavParams,
  LoadingController,
  ToastController,
  IonicPage
} from 'ionic-angular';

import { CustomerProvider } from '../../providers/customer/customer';


declare var google;



@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  map: any;
 infoWindow: any;
  token: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public customerProvider: CustomerProvider,
    private geolocation: Geolocation,
    private launchNav: LaunchNavigator
  ) {
    // this.lat = 16.4321938;
    // this.lng = 102.8236214;

    this.token = localStorage.getItem('token');
    let that = this;

    setTimeout(function() {
      that.googleMap();

    },2000 );
   
  }//constructor

  googleMap() {
    let that = this;
      this.map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 16.4321938, lng: 102.8236214},
        zoom: 6
      });
      this.infoWindow = new google.maps.InfoWindow;

      // Try HTML5 geolocation.
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };

          this.infoWindow.setPosition(pos);
          this.infoWindow.setContent('Your Location');
          this.infoWindow.open(that.map);
          that.map.setCenter(pos);

        }, function() {
          this.handleLocationError(true, this.infoWindow, that.map.getCenter(),that.map);
        });
      } else {
        
        this.handleLocationError(false, this.infoWindow, that.map.getCenter(),that.map);
      }
   

  }// googleMap


   handleLocationError(browserHasGeolocation, infoWindow, pos,map) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                          'Error: The Geolocation service failed.' :
                          'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
  }

}//end
