import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {
  
  @Input() customerId: string;
  @Output() delete: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteClick() {
    console.log(this.customerId);
    this.delete.emit(this.customerId);
    console.log('emit from delete-customer.component.ts');
  }
}
