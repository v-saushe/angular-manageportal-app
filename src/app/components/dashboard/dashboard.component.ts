import { Component, OnInit } from '@angular/core';

import { GlobalEventsManager } from '../../globalEventManager';
import { CheckSessionAliveService } from '../../services/checkSession.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _globalEventsManager: GlobalEventsManager, private _checkSessionService: CheckSessionAliveService) 
  {
     this._checkSessionService.checkSessionAlive(); 
  }

  ngOnInit() {

  }
}
