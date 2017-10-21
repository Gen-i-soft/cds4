import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';

import { SettingPage } from '../setting/setting';

import { HomePage } from '../home/home';
import { MainPage } from '../main/main';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MainPage;
   tab21Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = SettingPage;
/*
tabMain: any;
  tabContact: any;
  tabMessage: any;
  tabSetting: any;
  tabProcess: any;

*/
  constructor() {

  }
}
