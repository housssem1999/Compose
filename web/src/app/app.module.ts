import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { SearchComponent } from './search/search.component';
import { ItemComponent } from './item/item.component';
import { MyLibModule } from 'my-lib-by-houssem-moussa';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    AddCustomerComponent,
    DeleteCustomerComponent,
    UpdateCustomerComponent,
    SearchComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    MyLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
