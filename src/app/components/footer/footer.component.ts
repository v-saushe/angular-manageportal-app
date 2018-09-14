import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  today: Date = new Date();
  currentYear: number;

  constructor() {
    this.currentYear = this.today.getFullYear();
  }

  ngOnInit() {
  }

}
