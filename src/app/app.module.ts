import { NgModule, ErrorHandler,ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { SettingPage  } from '../pages/setting/setting';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MainPage } from '../pages/main/main';
import { LoginPage } from '../pages/login/login';
import { MapPage } from '../pages/map/map';

// import { GooglemapPage } from '../pages/googlemap/googlemap';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



import { UserProvider } from '../providers/user/user';
import { CustomerProvider } from '../providers/customer/customer';
import { LoginProvider } from '../providers/login/login';
import { HttpModule } from '@angular/http';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Camera } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
 import { AgmCoreModule } from '@agm/core';
import { PulldataProvider } from '../providers/pulldata/pulldata';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
// import {}
import { Push, PushObject, PushOptions } from '@ionic-native/push';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MainPage,
    LoginPage,
    MapPage,
    // , GooglemapPage,
    SettingPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule

  
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MainPage,
    LoginPage,
    MapPage,
    // GooglemapPage,
    SettingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    { provide: 'API_URL', useValue: 'http://192.168.1.11:3000' },
    
    UserProvider,
    CustomerProvider,
    LoginProvider,
    Camera,
    InAppBrowser,
    PulldataProvider,
    Geolocation,
    LaunchNavigator,
    Push
   
  

  ]
})
export class AppModule {}
