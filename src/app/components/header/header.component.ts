import { Component, OnInit } from "@angular/core";

import { GlobalEventsManager } from "../../globalEventManager";
import { CheckSessionAliveService } from "../../services/checkSession.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  public showMenu: boolean;

  constructor(
    private _globalEventsManager: GlobalEventsManager,
    private _checkSessionService: CheckSessionAliveService
  ) {
    this._globalEventsManager.showNavBar.subscribe((mode: any[]) => {
      this.showMenu = mode[0];
    });
  }

  ngOnInit() {}

  logOut() {
    console.log("logout");
    localStorage.removeItem("authorizationData");
    this._checkSessionService.checkSessionAlive();
  }
}
