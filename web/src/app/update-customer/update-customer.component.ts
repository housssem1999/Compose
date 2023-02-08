import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  @Input () customerId: string;
  
  UpdateCustomer: object={
    "name": "",
    "description": "",
  };

  @Output() update: EventEmitter<object> = new EventEmitter<object>();

  showUpdate: boolean = false;
  text: string = "Update";
  
  showUpdateComponent(): void {
    console.log("Show Update Component");
    this.showUpdate = !this.showUpdate;
    this.text = this.showUpdate ? "Hide" : "Update";
  }

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  onClick() {
    this.update.emit({id: this.customerId, item: this.UpdateCustomer});
    this.showUpdateComponent();
  }
}
