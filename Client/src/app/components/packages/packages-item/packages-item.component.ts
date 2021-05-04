import { Component, Input, OnInit } from '@angular/core';
import { PackageModel } from '../models/package.model';

@Component({
  selector: 'app-packages-item',
  templateUrl: './packages-item.component.html',
  styleUrls: ['./packages-item.component.css']
})
export class PackagesItemComponent implements OnInit {
  @Input()
  package: PackageModel;

  constructor() { }

  ngOnInit(): void {
  }

}
