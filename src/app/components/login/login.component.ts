import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { UserModel } from "../../models/user.model";

import { GlobalEventsManager } from "../../globalEventManager";
import { CheckSessionAliveService } from "../../services/checkSession.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  // styleUrls: ["./login.component.css"],
  providers: [GlobalEventsManager]
})
export class LoginComponent implements OnInit {
  model: UserModel = new UserModel();

  constructor(
    private _router: Router,
    private _globalEventsManager: GlobalEventsManager,
    private _checkSessionService: CheckSessionAliveService
  ) {
    var data = JSON.parse(localStorage.getItem("authorizationData"));
    if (data === null) {
      this._globalEventsManager.showNavBar.emit([false, ""]);
    }
    this._checkSessionService.checkSessionAlive();
  }

  ngOnInit() {}

  login(): void {
    localStorage.setItem(
      "authorizationData",
      JSON.stringify({
        token: "",
        userName: "v-saushe"
      })
    );

    this._globalEventsManager.showNavBar.emit([true, ""]);
    this._router.navigate(["/dashboard"]);
    console.log("hello");
  }
}
