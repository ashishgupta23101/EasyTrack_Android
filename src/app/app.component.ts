import { Component } from '@angular/core';
import { Platform, ToastController, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
// import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { Device } from '@ionic-native/device/ngx';
import { Storage } from '@ionic/storage';
import * as uuid from 'uuid';
import { TrackingService } from 'src/services/tracking.service';

import { FcmService } from 'src/services/fcm.service';
import { Network } from '@ionic-native/network/ngx';
import { LoaderService } from './providers/loader.service';
import { QueryParams } from './models/QueryParams';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

export enum ConnectionStatusEnum {
  Online,
  Offline
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})

export class AppComponent {

  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Active Packages',
      url: '/active-packages',
      icon: 'logo-dropbox'
    },
    {
      title: 'History',
      url: '/history',
      icon: 'logo-buffer'
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: 'construct'
    }
    // ,{
    //   title: 'Help',
    //   url: '/help',
    //   icon: 'help-circle'
    // }
    // ,{
    //   title: 'Help',
    //   url: '/help',
    //   icon: 'help-circle'
    // }
  ];

  previousStatus;

  queryParam: QueryParams;

  constructor(
    public platform: Platform,
    private navCtrl: NavController,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public loadingController: LoaderService,
    private storage: Storage,
    private trackService: TrackingService,
    private fcmService: FcmService,
    private network: Network,
    private iab: InAppBrowser,
    private screenOrientation: ScreenOrientation
  ) {
    this.splashScreen.show();
    this.previousStatus = ConnectionStatusEnum.Online;

    this.initializeApp();
    if (this.platform.is('android')) {
      // this.platform.resume.subscribe(async () => {
      let trackNo = localStorage.getItem("intent");
      if (trackNo != '' && trackNo != null && trackNo != 'undefined') {
        this.navCtrl.navigateBack(`/home`);
      }
      // });
    }
  }

  initializeApp() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    this.platform.ready().then(() => {
      if (this.platform.is('cordova')) {
        if (this.platform.is('ios')) {
          this.network.onDisconnect().subscribe(() => {
            setTimeout(() => {
              this.loadingController.presentToast('dark', 'Please check your Internet Conenction');
            }, 2000);
          });

          this.network.onConnect().subscribe(() => {
            setTimeout(() => {
              this.loadingController.presentToast('dark', 'Internet is Now Connected');
            }, 2000);
          });
        }
        else {
          // this.platform.resume.subscribe(async () => {
          //   let trackNo = localStorage.getItem("intent");
          //   debugger;
          //   this.navCtrl.navigateRoot('/home');
          //   // if(trackNo != '' && trackNo != null && trackNo != 'undefined')
          //   // {
          //   // this.navCtrl.navigateBack(`/home`);
          //   // }
          // });
          // watch network for a disconnection
          let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
            //   if (this.previousStatus === ConnectionStatusEnum.Online) {
            //     this.eventCtrl.publish('network:offline');
            // }
            this.loadingController.presentToast('dark', 'Please check your Internet Conenction');
            this.previousStatus = ConnectionStatusEnum.Offline;
          });

          // stop disconnect watch
          disconnectSubscription.unsubscribe();

          // watch network for a connection
          let connectSubscription = this.network.onConnect().subscribe(() => {
            //   if (this.previousStatus === ConnectionStatusEnum.Offline) {
            //     this.eventCtrl.publish('network:online');
            // }
            if (this.previousStatus == ConnectionStatusEnum.Offline) {
              setTimeout(() => {
                this.previousStatus == ConnectionStatusEnum.Online;
                this.loadingController.presentToast('dark', 'Internet is Now Connected');
              }, 2000);
            }
          });
          // stop connect watch
          connectSubscription.unsubscribe();
        }

        this.statusBar.backgroundColorByHexString('#7606a7');
        this.trackService.GenerateDeviceID();
        this.fcmService.notificationSetup();
      } else {
        localStorage.setItem("deviceID", 'browser');
      }
      this.trackService.saveToken();
    });
  }

  openUrl() {
    this.platform.ready().then(() => {
      let browser = this.iab.create('https://shipmatrix.com/');
    });
  }

}