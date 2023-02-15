import { Component, Input } from '@angular/core';
import { ItemsComponent } from '../items/items.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input() customer: any;

  constructor(private itemsComponent: ItemsComponent) { }


}
