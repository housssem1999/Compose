import { Component, OnInit, Input } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})

export class ItemsComponent implements OnInit {
  items: any[];
  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
    //how to call get from services
    this.customerService.getCustomers().subscribe((data: any)=>{
      console.log(data);
      this.items = data;
    });
  }

  onDelete(id: string) {
    this.customerService.deleteCustomer(id).subscribe(data=>{
      console.log('Deleted from items.component.ts');
      this.customerService.getCustomers().subscribe((data: any)=>{
        console.log(data);
        this.items = data;
      })
    });
 
  }

  addItems(item: object) {
    this.customerService.addCustomer(item).subscribe(data =>{
      console.log(data);
      this.customerService.getCustomers().subscribe((data: any)=>{
        console.log(data);
        this.items = data;
      })
    });
  }

  onUpdate(Item) {
    console.log(Item);
    this.customerService.updateCustomer(Item.id, Item.item).subscribe(data =>{
      console.log(data);
      this.customerService.getCustomers().subscribe((data: any)=>{
        this.items = data;
        console.log(this.items);
      })
    });
  }

  searchItems(searchWord: string) {
    console.log('Search button clicked ' + searchWord);
    this.customerService.searchCustomer(searchWord).subscribe((data: any)=>{
      console.log(data);
      this.items = data;
    });
  }

}
