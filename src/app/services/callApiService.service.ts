import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AppConfig } from "../config/app.config";
import { Observable } from "rxjs";

interface IArray {
  jsonObject: JSON;
}

@Injectable()
export class CallApiService {
  public arrayList = [];

  fullPath: string = "";

  constructor(private _http: HttpClient, private config: AppConfig) {}

  getCall(urlpath: string, integerValue?: number, integerValueString?: string): Observable<any> {
    this.fullPath =
      integerValue === null || integerValue === undefined
        ? this.config.apiURL + "api/" + urlpath
        : this.config.apiURL +  "api/" + urlpath + "?" + integerValueString +"=" + integerValue;

    return this._http.get<any>(this.fullPath);
  }
}