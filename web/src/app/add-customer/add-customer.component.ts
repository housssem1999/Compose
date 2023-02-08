import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  customer = { name: '', description: '' };
  @Output() add: EventEmitter<object> = new EventEmitter();

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.add.emit(this.customer);
    this.customer = { name: '', description: '' };
  }
}
