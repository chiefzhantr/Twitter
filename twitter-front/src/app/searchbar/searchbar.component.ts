import { Component } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {
  selectedOption: string = 'Post';
  searchText: string = '';

  onSearch(): void{
    console.log('Selected option: ${this.selectedOption}, Search text: ${this.searchText}');
  }
}
