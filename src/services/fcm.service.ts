//import { FCM } from '@ionic-native/fcm/ngx';
import { Injectable } from '@angular/core';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { AngularFirestore } from 'angularfire2/firestore';
import { TrackingService } from './tracking.service';
import { QueryParams } from 'src/app/models/QueryParams';
// import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { Device } from '@ionic-native/device/ngx';
import { SessionData } from 'src/app/models/active-packages';
import { LoaderService } from 'src/app/providers/loader.service';
import { stringify } from 'querystring';
// import { FCM } from '@ionic-native/fcm/ngx';
import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic/ngx';

@Injectable()
export class FcmService {
  queryParam: QueryParams;
  Notification: any;

  constructor(private firebase: FirebaseX,
    private storage: Storage,
    private trackService: TrackingService,
    private afs: AngularFirestore,
    private device: Device,
    // private fcm: FCM,
    private platform: Platform,
    private LoadingController: LoaderService,
    private fcm: FCM) { }

  async getToken() {
    let token;

    debugger;
    if (this.platform.is('android')) {
      // token = await this.firebase.getToken();
      this.fcm.getToken().then(tokenDevice => {
        token = tokenDevice;
      });
      // .catch(err =>
      //   this.LoadingController.presentToast('error', 'ErrorInToken ' + err)
      //   );
      // token = this.fcm.getToken().catch(err =>
      //   this.LoadingController.presentToast('error', 'ErrorInToken ' + err)
      //   );
      //   this.LoadingController.presentToast('error', 'Token ' + stringify(token));
      // this.fcm.getToken().then(devToken => {
      //   token = devToken;
      // });
    }

    if (this.platform.is('ios')) {
      token = await this.firebase.getToken();
      await this.firebase.grantPermission();
    }
    if (!token) return;
    localStorage.setItem("deviceToken", token);
    this.saveToken(token);
  }

  public notificationSetup() {
    if (this.platform.is('cordova')) {
      this.getToken();
      this.refreshToken().subscribe(token => {
        localStorage.setItem("deviceToken", token);
      });
    }

    this.subscribetoMessage(this.device.uuid);

    if (this.platform.is('android')) {
      this.onNotificationsAndroid();
    }
    else {
      this.onNotificationsOthers();
    }

    this.unsubscribetoMessage(this.device.uuid);
  }

  private saveToken(token) {
    if (!token) return;
    localStorage.setItem("deviceToken", token);
    const devicesRef = this.afs.collection('devices');
    this.trackService.logError('Token' + token, 'SaveToken');
    //alert(token);
    const data = {
      token,
      userId: localStorage.getItem("deviceID")
    };

    return devicesRef.doc(token).set(data);
  }

  subscribetoMessage(topic) {
    if (this.platform.is('ios')) {
      return this.firebase.subscribe(topic);
    }
    else (this.platform.is('android'))
    {
      return this.fcm.subscribeToTopic(topic);
    }
  }

  unsubscribetoMessage(topic) {
    if (this.platform.is('ios')) {
      this.firebase.unsubscribe(topic);
    }
    else if (this.platform.is('android')) {
      this.fcm.unsubscribeFromTopic(topic);
    }
  }

  refreshToken() {
    // if (this.platform.is('android')) {
    //   return this.fcm.onTokenRefresh();
    // }
    // else {
    return this.firebase.onTokenRefresh();
    // }
  }

  onNotificationsOthers() {
    this.firebase.onMessageReceived().subscribe(msg => {
      let notification: string;
      notification = msg.aps.alert.body;
      let message = notification.split(',');
      let trackingNoMessage = message[0].split(':');
      let carrierMessage = message[5].split(':');
      let trackingNo = trackingNoMessage[1].trim();
      let carrier = carrierMessage[1].trim();
      //let recordKey = trackingNo + '-' + carrier;

      // if (this.platform.is('ios')) {
      this.storage.get('apiData').then(aData => {
        if (aData !== null && aData !== undefined) {
          SessionData.apiURL = aData.apiURL;
          SessionData.apiType = aData.apiType;
        }
      });

      try {
        this.queryParam = new QueryParams();
        this.queryParam.TrackingNo = trackingNo;
        this.queryParam.Carrier = carrier;
        this.queryParam.Description = '';
        this.queryParam.Residential = 'false';
        this.trackService.getTrackingDetails(this.queryParam);
      } catch (Exception) {
        this.trackService.logError(JSON.stringify(Exception), 'notificationSetup()');
        // this.loadingController.presentToast('Error', JSON.stringify(Exception));
      }
    });
  }

  onNotificationsAndroid() {
    this.fcm.onNotification().subscribe(msg => {
      let trackingNo = this.getValueFromNotification(JSON.stringify(msg), "TrackingNo");
      let carrier = this.getValueFromNotification(JSON.stringify(msg), "Carrier");

      this.storage.get('apiData').then(aData => {
        if (aData !== null && aData !== undefined) {
          SessionData.apiURL = aData.apiURL;
          SessionData.apiType = aData.apiType;
        }
      });

      try {
        this.queryParam = new QueryParams();
        this.queryParam.TrackingNo = trackingNo;
        this.queryParam.Carrier = carrier;
        this.queryParam.Description = '';
        this.queryParam.Residential = 'false';
        this.trackService.getTrackingDetails(this.queryParam);
      } catch (Exception) {
        this.trackService.logError(JSON.stringify(Exception), 'notificationSetup()');
        // this.loadingController.presentToast('Error', JSON.stringify(Exception));
      }
    });
  }

  getValueFromNotification(notification: string, field: string) {
    let value: string;
    let startIndex: number;
    let endIndex: number;
    if (notification.includes(field)) {
      startIndex = notification.indexOf(field);
      startIndex = notification.indexOf(':', startIndex);
      startIndex = notification.indexOf('"', startIndex);
      endIndex = notification.indexOf('"', startIndex + 1);
      value = notification.substring(startIndex + 1, endIndex);
    }
    return value;
  }
}
