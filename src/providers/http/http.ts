import { ConstantsProvider } from './../constants/constants';
import { App, NavController } from 'ionic-angular';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { Subject } from 'rxjs/Rx';
import { ENV } from "@app/env";

import { UtilitiesProvider } from './../utilities/utilities';
/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {
  isOnline: boolean = true;

  constructor(
    private http: HttpClient,
    public app: App,
    public constant: ConstantsProvider,
    private utilitiesProvider: UtilitiesProvider
  ) {
    console.log('Hello HttpProvider Provider');
  }

  private httpRequest(
    type: string,
    apiName: string,
    data: any = {},
    showSuccessLoader: boolean = true,
    showErrorInToast: boolean = true
  ) {
    if (showSuccessLoader)
      this.utilitiesProvider.showLoader();
    let request;
    console.log(apiName);
    if (apiName.indexOf("http://") == -1 && apiName.indexOf("https://") == -1) {
      apiName = ENV.baseUrl + ENV.apiPath + apiName;
    }
    console.log(apiName);
    console.log(data);
    switch (type) {
      case 'GET':
        if (data) {
          let getArguments = ''
          for (let key in data) {
            if (key === 'length' || !data.hasOwnProperty(key)) continue;
            if (getArguments)
              getArguments = '&' + key + '=' + data[key];
            else
              getArguments = '?' + key + '=' + data[key];
            apiName += getArguments;
          }
        }
        request = this.http.get(apiName);
        break;
      case 'POST':
        request = this.http.post(apiName, data);
        break;
      case 'PUT':
        request = this.http.put(apiName, data);
        break;
      case 'DELETE':
        request = this.http.delete(apiName);
        break;
    }

    let subject = new Subject();
    let thisRequest = request;
    thisRequest.catch((err: any) => {
      console.log(apiName);
      console.log(err);
      return this.handleError(err);
    }).subscribe((data) => {
      console.log(apiName);
      console.log(data);
      subject.next(data)
      if (showSuccessLoader)
        this.utilitiesProvider.hideLoader();
    }, (err) => {
      console.log(apiName);
      console.log(err);
      if (showSuccessLoader)
        this.utilitiesProvider.hideLoader();
      if (showErrorInToast)
        this.utilitiesProvider.showToast({ message: err.error.message });
      if (err.status != 0) {
        subject.error(err);
      }
      if (err.status == 0) {
        if (this.navCtrl.getActive().id == this.constant.PAGES.NO_INTERNET) {

        } else {
          this.navCtrl.push(this.constant.PAGES.NO_INTERNET, { request: thisRequest, subject: subject, path: apiName }, { animate: false });
        }
      }
    });
    return subject;
  }

  private handleError(error: HttpErrorResponse) {
    console.log("handleError");
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
      console.error(error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return Observable.throw(error);
  };

  public get(apiName: string, data: any = {}, showSuccessLoader: boolean = true, showErrorInToast: boolean = true) {
    return this.httpRequest('GET', apiName, data, showSuccessLoader, showErrorInToast);
  }

  public post(apiName: string, data: any = {}, showSuccessLoader: boolean = true, showErrorInToast: boolean = true) {
    return this.httpRequest('POST', apiName, data, showSuccessLoader, showErrorInToast);
  }

  public put(apiName: string, data: any = {}, showSuccessLoader: boolean = true, showErrorInToast: boolean = true) {
    return this.httpRequest('PUT', apiName, data, showSuccessLoader, showErrorInToast);
  }

  public delete(apiName: string, data: any = {}, showSuccessLoader: boolean = true, showErrorInToast: boolean = true) {
    return this.httpRequest('DELETE', apiName, data, showSuccessLoader, showErrorInToast);
  }



  get navCtrl(): NavController {
    return this.app.getRootNav();
  }
}
