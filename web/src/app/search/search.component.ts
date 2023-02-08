import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchWord: string;
  @Output() searchWordEvent: EventEmitter<string> = new EventEmitter ();
  
  constructor(private customerService:CustomerService ) { }

  ngOnInit() {
  }
  
  search() {
    console.log('Search button clicked');
    this.searchWordEvent.emit(this.searchWord);
  }
}
