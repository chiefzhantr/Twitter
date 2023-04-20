import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {
  selectedOption: string = 'Post';
  searchText: string = '';

  constructor(
    private router: Router
  ) {
  }

  onSearch(): void {
    switch(this.selectedOption) {
      case 'Post':
        console.log(`Searching for "${this.searchText}" in Post`);
        this.router.navigate(['news'])
        break;
      case 'Person':
        console.log(`Searching for "${this.searchText}" in Person`);
        this.router.navigate(['profile'])
        break;
      default:
        console.log(`Unknown option: ${this.selectedOption}`);
    }
  }
}
