import { Component } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {
  selectedOption: string = 'Post';
  searchText: string = '';

  onSearch(): void {
    switch(this.selectedOption) {
      case 'Post':
        console.log(`Searching for "${this.searchText}" in Post`);

        break;
      case 'Person':
        console.log(`Searching for "${this.searchText}" in Person`);
        break;
      default:
        console.log(`Unknown option: ${this.selectedOption}`);
    }
  }
}
