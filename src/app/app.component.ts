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
    let trackNo = localStorage.getItem("intent");
    if (trackNo == '' || trackNo == null || trackNo == 'undefined') {
      // this.splashScreen.show();
    }
    this.previousStatus = ConnectionStatusEnum.Online;

    this.initializeApp();
    if (this.platform.is('android')) {
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    }
    if (this.platform.is('android')) {
      let trackNo = localStorage.getItem("intent");
      if (trackNo != '' && trackNo != null && trackNo != 'undefined') {
        if (window.location.pathname != "/home") {
          this.navCtrl.navigateRoot(`/home`);
        }
      }
    }
  }

  initializeApp() {

    // this.initializeSharedIntent();
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
          // let trackNo = localStorage.getItem("intent");
          // if (trackNo != '' && trackNo != null && trackNo != 'undefined') {
          //   this.navCtrl.navigateBack(`/home`);
          // }
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

  // initializeSharedIntent() {
  //   if (this.platform.is('ios')) {
  //     this.setupIOSIntent();
  //   }
  //   else {
  //     this.setupAndroidExistingIntent();

  //     var intentText = localStorage.getItem("intent");
  //     if (intentText == null || intentText == '' || intentText == 'undefined') {
  //       this.setupAndroidNewIntent();
  //     }
  //   }
  // }

  openUrl() {
    this.platform.ready().then(() => {
      let browser = this.iab.create('https://shipmatrix.com/');
    });
  }

  // setupAndroidNewIntent() {
  //   (<any>window).plugins.intent.getCordovaIntent((Intent) => {
  //     this.setIntent(Intent);
  //   });
  // }

  // setupAndroidExistingIntent() {
  //   (<any>window).plugins.intent.setNewIntentHandler((Intent) => {
  //     this.setIntent(Intent);
  //   });
  // }

  // setupIOSIntent() {
  //   // Increase verbosity if you need more logs
  //   //cordova.openwith.setVerbosity(cordova.openwith.DEBUG);

  //   // Initialize the plugin
  //   // cordova.openwith.init(initSuccess, initError);

  //   // function initSuccess() {
  //   //   console.log('init success!');
  //   // }

  //   // function initError(err) {
  //   //   console.log('init failed: ' + err);
  //   // }

  //   // // Define your file handler
  //   // cordova.openwith.addHandler(myHandler);

  //   // function myHandler(intent) {
  //   //   console.log('intent received');
  //   //   console.log('  text: ' + intent.text);
  //   //   localStorage.setItem("intent", intent.text);
  //   //   location.reload();
  //   //   //alert(localStorage.getItem("intent"));
  //   // }
  // }

  // setIntent(Intent) {
  //   if (JSON.stringify(Intent).includes('SEND')) {
  //     var items = JSON.stringify(Intent);
  //     var allData = JSON.parse(items);
  //     var trackingNoString = allData['extras'];

  //     items = JSON.stringify(trackingNoString);
  //     allData = JSON.parse(items);
  //     trackingNoString = allData['android.intent.extra.TEXT'];
  //     localStorage.setItem("intent", trackingNoString);

  //     location.reload();
  //   }
  //   // else
  //   // {
  //   //     localStorage.setItem("intent", JSON.stringify(Intent));
  //   // }
  // }

}