import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-panel-management',
  templateUrl: './panel-management.component.html',
  styleUrls: ['./panel-management.component.css']
})
export class PanelManagementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //Toggle Click Function
    $("#menu-toggle").click(function (e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }

}
