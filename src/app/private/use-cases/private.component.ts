import { Component, OnInit } from '@angular/core';
import {PAGES} from '../../core/const/pages.const';

@Component({
  selector: 'app-private',
  templateUrl: '../presentation/private.component.html',
  styleUrls: ['../presentation/private.component.scss']
})
export class PrivateComponent implements OnInit {

  public pages = PAGES;

  constructor() { }

  ngOnInit(): void {
  }

}
