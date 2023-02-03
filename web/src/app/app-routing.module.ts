import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';
import { ItemsComponent } from './items/items.component';

const routes: Routes = [
  { path: 'addCustomer', component: AddCustomerComponent },
  { path: 'delete-customer', component: DeleteCustomerComponent },
  { path: 'items', component: ItemsComponent },
  { path: '', redirectTo: 'items', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
