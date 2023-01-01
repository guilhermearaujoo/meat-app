import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from './menu-item.model';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {

  constructor() { }

  @Input() menuItem : MenuItem
  ngOnInit() {
  }

}
