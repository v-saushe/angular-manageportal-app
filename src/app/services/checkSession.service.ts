import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { GlobalEventsManager } from "../globalEventManager";

@Injectable()
export class CheckSessionAliveService {
  constructor(
    private _router: Router,
    private _globalEventsManager: GlobalEventsManager
  ) {}

  checkSessionAlive() {
    var data = JSON.parse(localStorage.getItem("authorizationData"));
    if (data != null) {
      this._globalEventsManager.showNavBar.emit([true, ""]);
      this._router.navigate(["/dashboard"]);
    } else {
      this._globalEventsManager.showNavBar.emit([false, ""]);
      this._router.navigate(["/login"]);
    }
  }

  IsCheckSessionAlive() {
    var data = JSON.parse(localStorage.getItem("authorizationData"));
    if (data === null) {
      this._globalEventsManager.showNavBar.emit([false, ""]);
      this._router.navigate(["/login"]);
    } else {
      this._globalEventsManager.showNavBar.emit([true, ""]);
    }
  }
}
