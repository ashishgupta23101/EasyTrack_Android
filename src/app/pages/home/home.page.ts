import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
// import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TrackingService } from 'src/services/tracking.service';
import { IonSelect, NavController, Platform, MenuController } from '@ionic/angular';
import { QueryParams } from 'src/app/models/QueryParams';
//import { ZBar, ZBarOptions } from '@ionic-native/zbar/ngx';
import {
  BarcodeScannerOptions,
  BarcodeScanner
} from '@ionic-native/barcode-scanner/ngx';
import { FilteringDates, SessionData } from 'src/app/models/active-packages';
import * as moment from 'moment';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { LoaderService } from 'src/app/providers/loader.service';
import { HelperService } from 'src/app/providers/helper.service';
import { UrlChangerPage } from '../url-changer/url-changer.page';
import { Storage } from '@ionic/storage';
import { disableBindings } from '@angular/core/src/render3';
import { FcmService } from 'src/services/fcm.service';
import { ThrowStmt } from '@angular/compiler';
// import { WebIntent } from '@ionic-native/web-intent/ngx';

enum TrackingMode {
  Scanned,
  Typed,
  Shared,
  Notification
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy, AfterViewInit {
  // export class HomePage implements OnInit {
  track_Form: FormGroup;
  loaderToShow: any;
  queryParam: QueryParams;
  encodeData: any;
  carrierCode: any = '';
  SCAC: any = '';
  scannedData: {};
  isCarrier = true;
  barcodeScannerOptions: BarcodeScannerOptions;
  trackNo: string = '';
  trackingMode: TrackingMode;

  @ViewChild('carrierList') carrierSelectRef: IonSelect;

  backButtonSubscription;
  subComponentOpened = false;
  // items: any;
  // result: JSON;
  // allData: any;
  // trackingNoObject: any;

  // tslint:disable-next-line: max-line-length
  constructor(private route: ActivatedRoute, public platform: Platform, private splashScreen: SplashScreen,
    private barcodeScanner: BarcodeScanner, private storage: Storage,
    public formBuilder: FormBuilder, //private zbar: ZBar,
    public loadingController: LoaderService,
    public helper: HelperService, private trackService: TrackingService, private navCtrl: NavController,
    private fcm: FcmService,
    private menuCtrl: MenuController
    // private webIntent: WebIntent
  ) {
    this.track_Form = this.formBuilder.group({
      TrackingNo: new FormControl('')
    });
    // localStorage.setItem("isScanned", 'false');
  }
  gotoScanner() {
    this.navCtrl.navigateForward(`/barcode-scanner`);
  }
  // Phonegap Scanner
  scanPGCode() {
    this.trackingMode = TrackingMode.Scanned;
    this.subComponentOpened = true;
    this.barcodeScannerOptions = {
      preferFrontCamera: false,
      showFlipCameraButton: true,
      showTorchButton: true,
      torchOn: false,
      prompt: 'Place a barcode inside the scan area',
      disableAnimations: true,
      orientation: 'portrait'
    };
    this.barcodeScanner
      .scan(this.barcodeScannerOptions)
      .then(barcodeData => {
        if (barcodeData !== null) {
          //alert(JSON.stringify(barcodeData));

          this.trackNo = barcodeData.text.replace('\u001d', '');
          this.GetCarrierByTNC(this.trackNo, TrackingMode.Scanned, true);
        } else {
          this.loadingController.presentToast('Warning', 'No Data Available');
          this.subComponentOpened = false;
        }

        if (barcodeData.cancelled == true) {
          this.clearTrack();
        }

      })
      .catch(error => {
        this.clearTrack();
        this.trackService.logError(JSON.stringify(error), 'barcode Scan issue');
        this.loadingController.presentToast('Error', 'Something went wrong');
      });
  }

  // scanPGCode1() {
  //   this.trackingMode = TrackingMode.Scanned;
  //   this.subComponentOpened = true;
  //   this.qrScanner.useBackCamera();
  //   // Optionally request the permission early
  //   this.qrScanner.prepare()
  //     .then((status: QRScannerStatus) => {
  //       if (status.authorized) {
  //         // camera permission was granted


  //         // start scanning
  //         let scanSub = this.qrScanner.scan().subscribe((text: string) => {
  //           if (text != null) {
  //             this.trackNo = text.replace('\u001d', '');
  //             this.GetCarrierByTNC(this.trackNo, TrackingMode.Scanned, true);

  //             this.qrScanner.hide(); // hide camera preview
  //             scanSub.unsubscribe(); // stop scanning
  //           }
  //           else {
  //             this.loadingController.presentToast('Warning', 'No Data Available');
  //             this.subComponentOpened = false;
  //           }
  //         });

  //       } else if (status.denied) {
  //         // camera permission was permanently denied
  //         // you must use QRScanner.openSettings() method to guide the user to the settings page
  //         // then they can grant the permission from there
  //       } else {
  //         // permission was denied, but not permanently. You can ask for permission again at a later time.
  //       }
  //     })
  //     .catch((error: any) => {
  //       this.clearTrack();
  //       this.trackService.logError(JSON.stringify(error), 'barcode Scan issue');
  //       this.loadingController.presentToast('Error', 'Something went wrong');
  //     });
  // }

  CorrectTrackingNo(trackNo: string) {
    if ((trackNo.length > 20) && trackNo.substring(0, 3) == '420') {
      trackNo = trackNo.substring(8);
    }
    return trackNo;
  }

  // Phonegap Scanner	
  scanzBarCode() {
    // let options: ZBarOptions = {
    //   flash: 'off',
    //   drawSight: true
    // }
    // this.zbar.scan(options)
    //   .then(result => {
    //     alert(JSON.stringify(result));
    //     if (result !== null) {
    //       alert(JSON.stringify(result));
    //       this.trackNo = result.text.replace('\u001d', '');
    //       this.GetCarrierByTNC(this.trackNo);
    //       this.track_Form = this.formBuilder.group({
    //         TrackingNo: new FormControl(this.trackNo),
    //         Carrier: new FormControl(this.carCode)
    //       });
    //       this.trackService.logError(JSON.stringify(result), 'Tracking No');
    //       // 	
    //     } else {
    //       this.loadingController.presentToast('Warning', 'No Data Available');
    //     }
    //   })
    //   .catch(error => {
    //     this.fillCarrierCode('');
    //     this.trackService.logError(JSON.stringify(error), 'barcode Scan issue');
    //     this.loadingController.presentToast('Error', 'Something went wrong');
    //   });
  }

  ValidateTrackNo(trakNo: string) {
    if (trakNo.length > 3 && trakNo.substring(0, 3).toLowerCase() === 'tba') {
      this.loadingController.presentToast('Warning', 'Please track via amazon.');
      return false;
    }

    return true;
  }

  help() {
    this.navCtrl.navigateForward(`/help`);
  }

  ngOnInit() {
    // this.platform.ready().then(() => {
    //   this.loadingController.presentToast('dark', 'platform is ready');
    // });
    // this.getIntentValueIfAvailable();
    this.track_Form = this.formBuilder.group({
      TrackingNo: new FormControl('')
    });
    this.fillIntentValue();
  }

  fillIntentValue() {
    let TrackingNo = localStorage.getItem("intent");
    // alert(this.trackNo);
    if (TrackingNo !== null && TrackingNo !== undefined && TrackingNo !== '') {
      //alert(this.trackNo);
      this.trackingMode = TrackingMode.Shared;
      TrackingNo = TrackingNo.replace('\u001d', '');
      this.GetCarrierByTNC(TrackingNo, TrackingMode.Shared, false);
      localStorage.setItem("intent", '');
      // alert('end' + this.trackNo);
    }
    else {
      this.clearTrack();
    }
  }

  ngAfterViewInit() {
    this.backButtonSubscription = this.platform.backButton.subscribe(async () => {

      if (window.location.pathname === "/home" && !(await this.menuCtrl.isOpen("start")) && !this.subComponentOpened) {
        navigator['app'].exitApp();
      }

      if (await this.menuCtrl.isOpen("start")) {
        this.closeMenu();
      }
      this.subComponentOpened = false;
    });
  }
  ngOnDestroy() {
    this.backButtonSubscription.unsubscribe();
  }

  closeMenu() {
    this.menuCtrl.close("start");
  }

  ionViewWillEnter() {
    this.splashScreen.hide();
    this.closeMenu();
    //this.fillIntentValue();	
    this.clearTrack();
    let isLastScanned = localStorage.getItem("isScanned");
    if (isLastScanned === 'true' && this.trackingMode == TrackingMode.Scanned) {
      this.scanPGCode();
    }
    if (this.trackNo === 'SHIPMATRIX') {
      this.fillIntentValue();
    }
    this.setfilteringDatestoSession();
    localStorage.setItem("isScanned", 'false');
  }

  fillCarrierCode(formVal) {
    this.trackingMode = TrackingMode.Typed;
    this.GetCarrierByTNC(formVal.TrackingNo, TrackingMode.Typed);
  }

  GetCarrierByTNC(TrackingNo: string, mode: TrackingMode, isScanned = false) {
    if (TrackingNo === 'SHIPMATRIX') {
      this.navCtrl.navigateForward(`/url-changer`);
    } else {

      if (this.ValidateTrackNo(TrackingNo) && TrackingNo) {
        if (mode != TrackingMode.Shared) {
          this.loadingController.present('Verifying Carrier....');
          this.subComponentOpened = true;
        }
        TrackingNo = this.CorrectTrackingNo(TrackingNo);
        this.track_Form = this.formBuilder.group({
          TrackingNo: new FormControl(TrackingNo)
        });

        this.trackService.TNCapi(TrackingNo).subscribe(
          data => {
            this.track_Form = this.formBuilder.group({
              TrackingNo: new FormControl(TrackingNo)
            });
            this.carrierCode = data.ResponseData.Carrier;
            try {
              this.SCAC = data.ResponseData.SCAC;
            }
            catch (err) {
              this.SCAC = "";
              this.trackService.logError(JSON.stringify(err), 'fillCarrierCode');
            }
            localStorage.setItem("SCAC", this.SCAC);
            if (mode != TrackingMode.Shared) {
              this.loadingController.dismiss();
              this.subComponentOpened = false;
            }

            if (this.carrierCode === null || this.carrierCode === 'null' || this.carrierCode === '' || this.carrierCode === undefined) {
              localStorage.setItem("SCAC", '');
              this.carrierSelectRef.open();
            }
            else {
              if (isScanned === true) {
                localStorage.setItem("isScanned", 'true');
              } else {
                localStorage.setItem("isScanned", 'false');
              }

              this.doTrack(data.ResponseData.TrackingNo, this.carrierCode);
            }

          }, error => {
            this.track_Form = this.formBuilder.group({
              TrackingNo: new FormControl(TrackingNo)
            });
            this.carrierCode = '';
            if (mode != TrackingMode.Shared) {
              this.loadingController.dismiss();
              this.subComponentOpened = false;
            }
            this.carrierSelectRef.open();
            this.loadingController.presentToast('Error', 'Unable to verify carrier.');
            this.trackService.logError(JSON.stringify(error), 'fillCarrierCode');
          });

      } else {
        this.carrierCode = '';
        this.track_Form = this.formBuilder.group({
          TrackingNo: new FormControl(TrackingNo)
        });
      }
    }
  }

  onSearchChange(searchValue: string): void {
    this.trackNo = searchValue;
    if (searchValue === 'SHIPMATRIX') {
      this.navCtrl.navigateForward(`/url-changer`);
    }
  }

  doTrack(trackingNumber, ccode = "NA") {
    try {
      localStorage.setItem("intent", '');
      this.carrierCode = ccode == "NA" ? this.carrierSelectRef.value : ccode;
      this.queryParam = new QueryParams();
      this.queryParam.TrackingNo = trackingNumber;
      this.queryParam.Carrier = this.carrierCode;
      this.queryParam.Description = '';
      this.queryParam.Residential = 'true';
      this.trackService.getTrackingDetails(this.queryParam);
    } catch (Exception) {
      this.trackService.logError(JSON.stringify(Exception), 'doTrack-home');
      this.loadingController.presentToast('Error', JSON.stringify(Exception));
    }
  }
  clearTrack() {
    this.carrierCode = '';
    localStorage.setItem("SCAC", '');
    this.track_Form = this.formBuilder.group({
      TrackingNo: new FormControl('')
    });
    this.track_Form.reset();
  }
  resInfoAlert() {
    this.loadingController.presentAlert('Info',
      // tslint:disable-next-line: max-line-length
      'Check the box to the right if your package will be delivered to a residence.Uncheck the box if your package will be delivered to commercial location.If unsure , leave the box checked.');
  }

  setfilteringDatestoSession() {
    let _filteringDates = new FilteringDates();
    _filteringDates.Today = new Date();
    _filteringDates.ThisWeek = this.trackService.getFirstLastDayOfWeek(new Date());
    _filteringDates.Yesterday = moment(_filteringDates.Today).subtract(1, 'days').toDate();
    let dateoflastweek = moment(_filteringDates.ThisWeek.firstDate).subtract(1, 'days').toDate();
    _filteringDates.LastWeek = this.trackService.getFirstLastDayOfWeek(dateoflastweek);
    SessionData.filteringDates = _filteringDates;
    // this.storage.get('_activePackages').then(tData => {
    //   if (tData == null) {tData = []; return; }
    //   this.trackService.setPackagestoSession(tData);
    // });
    // this.storage.get('_archivePackages').then(aData => {
    //   if (aData == null) {aData = []; return; }
    //   this.trackService.setarchivePackagestoSession(aData);
    // });
  }
}
