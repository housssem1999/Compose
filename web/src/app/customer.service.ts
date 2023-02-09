import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url: string = 'http://localhost:8083/api/products';
  constructor(private http: HttpClient) { }

  addCustomer(customer: object) {
    return this.http.post(this.url, customer);
  }

  deleteCustomer(customerId: string) {
    return this.http.delete(this.url +'/'+ customerId);
  }

  getCustomers() {
    return this.http.get(this.url);
  }

  getCustomer(customerId: string) {
    return this.http.get(this.url + '/' + customerId);
  }

  updateCustomer(customerId: string, customer: object) {
    return this.http.put(this.url + '/' + customerId, customer);
  }

  searchCustomer(customerName: string) {
    return this.http.get(this.url + '/search/?name=' + customerName);
  }


}
