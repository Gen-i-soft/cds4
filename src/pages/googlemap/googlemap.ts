import { Component , ViewChild, ElementRef} from '@angular/core';
import { IonicPage, NavController, NavParams,Platform } from 'ionic-angular';
 import { Geolocation } from '@ionic-native/geolocation';
import { MainPage } from '../main/main';


declare var google: any;

@IonicPage()
@Component({
  selector: 'page-googlemap',
  templateUrl: 'googlemap.html',
})
export class GooglemapPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  customerLat: number;
  customerLng: number;
  currentLat: number ;
  currentLng: number ;
  lat: number;
  lng: number;
  // resps: any[];
  // zoomLevel: number = 18;
  // ,



  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public geolocation: Geolocation
   )
  {
  }

  ionViewDidLoad() {
    // console.log(this.mapRef);

    
    // this.showMap();
    this.loadMap();
  }

  sendMap() {
    this.navCtrl.push(MainPage, {
      customerLat: this.customerLat,
      customerLng: this.customerLng
    });
  }

  loadMap() {
    this.geolocation.getCurrentPosition().then((position) => {


    
      let latLng = new google.maps.LatLng(position.coords.latitude,
      position.coords.longitude);

      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    }, (err) => {
      console.log(err);
    });
  }



  showMap() {
   

    
  }//showmap

  addMarker() {
   


    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });
    let content =this.map ;
    this.addInfoWindow(marker, content);
//show latlong
    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      this.customerLat = data.coords.latitude
      this.customerLng = data.coords.longitude
    });

  }

  addInfoWindow(marker, content) {
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
  //  google.maps.event.addListener(marker, 'click', function (evt) {
  //     document.getElementById('current').innerHTML = '<p>Marker dropped: Current Lat:' +
  //       evt.latitude.lat().toFixed(3) + 'Current Lng:' + evt.latLng.lng().toFixed(3) + '</p>';
  //     this.customerLat = evt.latitude.lat().toFixed(3);
  //     this. currentLng = evt.latitude.lng().toFixed(3);
  //     infoWindow.open(this.map, marker);
  //   });
  }

}//end
